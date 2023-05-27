import React, { useContext } from 'react';

import { setDoc, doc } from 'firebase/firestore';

import { UniversalTypes } from '../../../types/UniversalTypes';
import { PromptTypes } from '../Prompt.types';

import Button from '../../../atoms/Button/Button';

import { UniversalContext, defaultSong } from '../../../organisms/MainPanel';



const DeletePrompt = ({ setPrompt }: PromptTypes.IPrompt): JSX.Element => {

    const { db, tempSongs, toDelete, currentSong, setCurrentSong } = useContext(UniversalContext);

    const deleteSong = async (song: UniversalTypes.ISongObject) => {
        setPrompt({ isVisible: false, type: 'delete' });
        const payload = tempSongs?.current.filter(el => el.id !== song.id);
        await setDoc(doc(db, 'texts', 'songs'), { payload });

        if (song.id === currentSong?.id) {
            setCurrentSong && setCurrentSong(defaultSong);
        }
    };


    return (
        <div className='prompt__input prompt__input--delete'>
            <h2>Czy na pewno chcesz<br/>usunąć ten utwór?</h2>
            <div className='prompt__buttons'>
                <Button copy='Usuń' onClick={() => toDelete?.current && deleteSong(toDelete.current)}/>
                <Button copy='Anuluj' onClick={() => setPrompt(false)} />
            </div>
        </div>
    );
};

export default DeletePrompt;