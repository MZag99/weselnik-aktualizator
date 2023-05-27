import React, { LegacyRef, useContext, useEffect, useRef } from 'react';
import { SongItemTypes } from './SongItem.types';

import Icon from '../Icon/Icon';

import { UniversalContext } from '../../organisms/MainPanel';

import trash from '../../assets/images/trash.png';


const SongItem = ({ song, promptDelete }: SongItemTypes.IProps): JSX.Element => {

    const { currentSong, setCurrentSong, toDelete } = useContext(UniversalContext);

    const thisRef = useRef<HTMLElement>();

    const getAbbr = (arg: string, offset: number): string => {
        const length = 28 - offset;
        const result = arg.substring(0, length);

        if (result === arg) {
            return arg;
        } else {
            return result + '...';
        }
    };


    const onRemove = async (e: Event) =>  {
        e.stopPropagation();     
        if (toDelete) {
            toDelete.current = song;
            promptDelete();
        }
    };


    const onClick = (): void => {
        setCurrentSong && setCurrentSong(song);
    };


    useEffect(() => {
        if (currentSong) {
            const isCurrent = currentSong.id === song.id;

            thisRef.current?.classList.toggle('is-active', isCurrent);
        }
    }, [currentSong]);


    return (
        <li ref={thisRef as LegacyRef<HTMLLIElement>} className='song-item' onClick={onClick}>
            <strong>{song.author}</strong> - {getAbbr(song.name, song.author.length)}
            <span>
                <Icon image={trash} onClick={onRemove}/>
            </span>
        </li>
    );
};

export default SongItem;