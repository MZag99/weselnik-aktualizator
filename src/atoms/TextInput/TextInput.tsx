import React from 'react';

import type { InputTypes } from './TextInput.types';


function TextInput({ inputName, placeholder, onChange }: InputTypes.IProps) {
    return (
        <input className={`input input--${inputName}`} type='text' id={`input-${inputName}`} placeholder={ placeholder} onChange={(e) => onChange(e.target.value)}/> 
    );
}

export default TextInput;