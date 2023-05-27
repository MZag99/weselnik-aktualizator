
import React, { ChangeEvent, LegacyRef, useContext, useEffect, useRef, useState } from 'react';

import { EditorTypes } from './Editor.types';

import Button from '../../atoms/Button/Button';
import { UniversalContext } from '../../organisms/MainPanel';

import { setDoc, doc } from 'firebase/firestore';


const Editor = ({ inputValue, setInputValue, currentSong, setIsPrompt }: EditorTypes.IProps) => {

    const textAreaRef = useRef<HTMLTextAreaElement>();
    const initInputValue = useRef<string>('');

    const { db, tempSongs } = useContext(UniversalContext);

    const [hasChanged, setHasChanged] = useState<boolean>(false);

    /* Changes content state based on input
     */
    const onChange = async (e: ChangeEvent) => {
        const target = (e.target as HTMLInputElement);

        setInputValue(target.value);
    };


    const onSave = async () => {
        const isSongSet = currentSong.id !== 0;

        if (!isSongSet) {
            setIsPrompt({ isVisible: true, type: 'add' });
        } else {
            if (tempSongs) {
                const tempItem = tempSongs.current.find(el => el.id === currentSong.id);
                const index = tempItem && tempSongs.current.indexOf(tempItem);

                if (!index && index !== 0) return;

                tempSongs.current[index] = currentSong;
    
                const payload = [...tempSongs.current];

                initInputValue.current = inputValue;
                setHasChanged(initInputValue.current === inputValue);

                await setDoc(doc(db, 'texts', 'songs'), { payload });
            }
        }
        
    };


    useEffect(() => {
        initInputValue.current = '';
        setInputValue(currentSong.text);
    }, [currentSong.id]);
    
    
    useEffect(() => {
        if (!initInputValue.current.length) {
            initInputValue.current = inputValue;
        }

        textAreaRef.current && (textAreaRef.current.value = inputValue);
        setHasChanged(initInputValue.current === inputValue);
    }, [inputValue]);



    return (
        <div className='editor'>
            <div className='editor__header'>
                <h2>Edytor</h2>
                <div>
                    <Button copy='Zapisz' onClick={() => onSave()} isLocked={hasChanged}/>
                    <Button copy='Reset' onClick={() => setInputValue(initInputValue.current)} isLocked={hasChanged} />
                </div>
            </div>
            <div className='editor__content'>
                <textarea ref={textAreaRef as LegacyRef<HTMLTextAreaElement>} spellCheck={false} placeholder='Tutaj wprowadź tekst utworu...' onChange={onChange} />
            </div>
        </div>
    );
};

export default Editor;