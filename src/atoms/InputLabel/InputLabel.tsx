import React from 'react';

import type { LabelTypes } from './InputLabel.types';


function InputLabel({ inputName }: LabelTypes.IProps) {
    return (
        <label htmlFor={`input-${inputName}`}></label>
    );
}

export default InputLabel;