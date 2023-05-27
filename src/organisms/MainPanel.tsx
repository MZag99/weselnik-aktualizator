import React, { createContext, useEffect, useRef, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, doc, collection, onSnapshot } from 'firebase/firestore';

import Editor from '../molecules/Editor/Editor';
import Preview from '../molecules/Preview/Preview';
import SongList from '../molecules/SongList/SongList';

import { firebaseConfig } from '../firebase.config';

import { UniversalTypes } from '../types/UniversalTypes';
import Prompt from '../molecules/Prompt/Prompt';


export const UniversalContext = createContext<UniversalTypes.IUniversalContext>({});
export const defaultSong = {
    author: 'Autor piosenki',
    name: 'Tytuł piosenki',
    text: '',
    id: 0,
    isChanged: false,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const MainPanel = () => {

    const tempSongs = useRef<UniversalTypes.ISongObject[]>([]);
    
    const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false);
    const [isPrompt, setIsPrompt] = useState<UniversalTypes.IPromptState>({ isVisible: false, type: 'add' });
    const [songList, setSongList] = useState<UniversalTypes.ISongObject[]>();
    const [inputValue, setInputValue] = useState<string>('');
    const [currentSong, setCurrentSong] = useState<UniversalTypes.ISongObject>(defaultSong);
    
    const toDelete = useRef<UniversalTypes.ISongObject>();



    const getData = async () => new Promise<boolean>(async (resolve) => {

        try {
            let status = false;

            setTimeout(() => {
                !status && resolve(false);
                return;
            }, 10000);

            const qS = await getDocs(collection(db, 'texts'));

            qS.forEach(doc => {
                tempSongs.current = [];
                status = true;
                doc.data().payload.forEach((song: UniversalTypes.ISongObject) => {
                    tempSongs.current.push(song);
                });
            });

            setIsDataLoaded(true);
            resolve(true);

        } catch (e) {
            setIsDataLoaded(false);
            resolve(false);
        }
    });



    const promptAdd = () => {
        setIsPrompt({
            isVisible: true,
            type: 'add'
        });
    };


    const promptDelete = () => {
        setIsPrompt({
            isVisible: true,
            type: 'delete'
        });
    };


    useEffect(() => {
        getData();

        const unsub = onSnapshot(doc(db, 'texts', 'songs'), () => {
            setIsDataLoaded(false);
            getData();
        });

        return () => {
            unsub();
        };
    }, []);


    useEffect(() => {
        setCurrentSong({...currentSong, text: inputValue});
    }, [inputValue]);


    useEffect(() => {
        if (isDataLoaded) {
            setSongList(tempSongs.current);
        }
    }, [isDataLoaded]);


    return (
        <div className='main-panel'>
            <UniversalContext.Provider value={{ setInputValue, currentSong, setCurrentSong, db, tempSongs, toDelete }}>
                {isPrompt.isVisible && <Prompt setPrompt={setIsPrompt} promptType={isPrompt.type} inputValue={inputValue}/>}
                <aside className='main-panel__element main-panel__songs'>
                    <SongList songs={songList} promptAdd={promptAdd} promptDelete={promptDelete}/>
                </aside>
                <main className='main-panel__element main-panel__editor'>
                    <Editor inputValue={inputValue} setInputValue={setInputValue} currentSong={currentSong} setIsPrompt={setIsPrompt}/>
                </main>
                <aside className='main-panel__element main-panel__preview'>
                    <Preview content={inputValue} currentSong={currentSong} />
                </aside>
            </UniversalContext.Provider>
        </div>
    );
};

export default MainPanel;