import React from 'react';

import Icon from '../../atoms/Icon/Icon';

import { SearchbarTypes } from './Searchbar.types';

import glass from '../../assets/images/glass.png';


const Searchbar = ({ onChange }: SearchbarTypes.IProps): JSX.Element => {
    return (
        <div className='searchbar'>
            <div className='searchbar__glass'>
                <Icon image={glass}/>
            </div>
            <input type='text' placeholder='Wyszukaj piosenkę...' onChange={onChange} />
        </div>
    );
};

export default Searchbar;