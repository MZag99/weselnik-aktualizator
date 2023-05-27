import React, { useContext, useEffect, useState } from 'react';

import { setDoc, doc } from 'firebase/firestore';

import { UniversalTypes } from '../../../types/UniversalTypes';
import { PromptTypes } from '../Prompt.types';

import Button from '../../../atoms/Button/Button';
import TextInput from '../../../atoms/TextInput/TextInput';

import { UniversalContext } from '../../../organisms/MainPanel';


const AddPrompt = ({ setPrompt, inputValue }: PromptTypes.IPrompt): JSX.Element => {

    const { db, tempSongs, currentSong, setCurrentSong } = useContext(UniversalContext);

    const [isValid, setIsValid] = useState<boolean>(false);
    const [author, setAuthor] = useState<string>('');
    const [title, setTitle] = useState<string>('');


    const handleClick = () => {
        isValid && addSong(title, author);
        setPrompt(false);
    };


    const addSong = async (name: string, author: string) => {

        if (!tempSongs) return;

        const isCurrentEmpty = currentSong && currentSong.id === 0;

        const newSong: UniversalTypes.ISongObject = {
            author,
            name,
            id: Math.round(Date.now() * (Math.random() * 2 + 1)),
            text: (isCurrentEmpty && inputValue) ? inputValue : '',
        };

        const payload = [...tempSongs.current, newSong];
        tempSongs.current = payload;

        await setDoc(doc(db, 'texts', 'songs'), { payload });
        isCurrentEmpty && setCurrentSong && setCurrentSong(newSong);
    };


    useEffect(() => {
        setIsValid(author.length > 0 && title.length > 0);
    }, [author, title]);


    return (
        <div className='prompt__input prompt__input--add'>
            <h2>Dodaj nową piosenkę</h2>
            <p>Tytuł:</p>
            <TextInput inputName='piosenka' placeholder='Wpisz nazwę piosenki' onChange={setTitle} />
            <p>Autor:</p>
            <TextInput inputName='autor' placeholder='Wpisz autora' onChange={setAuthor} />
            <Button copy='Dodaj' onClick={handleClick} isLocked={!isValid} />
        </div>
    );
};

export default AddPrompt;