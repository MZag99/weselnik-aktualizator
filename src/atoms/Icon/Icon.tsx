import React from 'react';

import { IconTypes } from './Icon.types';


const Icon = ({ image, onClick }: IconTypes.IProps): JSX.Element => {
    return (
        <img className='icon' src={image} alt='' onClick={onClick} />
    );
};

export default Icon;