import React from 'react';

import TextInput from '../../atoms/TextInput/TextInput';
import InputLabel from '../../atoms/InputLabel/InputLabel';

import type { CustomInputTypes } from './CustomInput.types';


const CustomInput = ({ inputName, placeholder, onChange }: CustomInputTypes.IProps ) => {
    return (
        <>
            <InputLabel inputName={ inputName } />
            <TextInput inputName={ inputName } placeholder={ placeholder } onChange={onChange}/>
        </>
    );
};

export default CustomInput;