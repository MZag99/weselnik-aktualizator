import React, { ChangeEvent, ReactNode, useState } from 'react';

import { UniversalTypes } from '../../types/UniversalTypes';
import { SongListTypes } from './SongList.types';

import Searchbar from '../Searchbar/Searchbar';

import SongItem from '../../atoms/SongItem/SongItem';
import Button from '../../atoms/Button/Button';


const SongList = ({ songs, promptAdd, promptDelete }: SongListTypes.IProps) => {

    const [searchPhrase, setSearchPhrase] = useState<string>('');


    const testFilter = (el: UniversalTypes.ISongObject, phrase: string): boolean => {

        const isName = el.name.toLowerCase().includes(phrase.toLowerCase());
        const isAuthor = el.author.toLowerCase().includes(phrase.toLowerCase());

        return isName || isAuthor;
    };


    const mapSongs = (songs: UniversalTypes.ISongObject[]): ReactNode => (
        songs?.map((song, i) => {
            if (searchPhrase.length) {
                if (testFilter(song, searchPhrase)) {
                    return <SongItem key={i} song={song} promptDelete={promptDelete} />;
                }
            } else {
                return <SongItem key={i} song={song} promptDelete={promptDelete} />;
            }
        }));


    const onChange = (e: ChangeEvent) => {
        const value = (e.target as HTMLInputElement).value;
        setSearchPhrase(value);
    };


    return (
        <div className='song-list'>
            <div className='song-list__header'>
                <h2>Piosenki<span> ({songs?.length})</span></h2>
                <Button copy='Dodaj' onClick={promptAdd} isLocked={false}/>
            </div>
            <Searchbar onChange={onChange} />
            <ul className='song-list__list'>
                {songs && mapSongs(songs)}
            </ul>
        </div>
    );
};

export default SongList;