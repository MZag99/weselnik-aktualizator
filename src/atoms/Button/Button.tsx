import React from 'react';

import type { ButtonTypes } from './Button.types';

const Button = ({ copy, onClick, isLocked = false }:ButtonTypes.IProps) => {
    return (
        <button className={`button${isLocked ? ' button--locked' : ''}`} onClick={onClick}>
            {copy}
        </button>
    );
};

export default Button;