import React from 'react';

import Icon from '../../atoms/Icon/Icon';

import close from '../../assets/images/close.png';

import { PromptTypes } from './Prompt.types';

import AddPrompt from './AddPrompt/AddPrompt';
import DeletePrompt from './DeletePrompt/DeletePrompt';


const Prompt = ({ setPrompt, promptType, inputValue }: PromptTypes.IProps) => {

    return (
        <div className='prompt'>
            <div className='prompt__close'>
                <Icon image={close} onClick={() => setPrompt(false)} />
            </div>
            {promptType === 'add' ? <AddPrompt setPrompt={setPrompt} inputValue={inputValue}></AddPrompt> : <DeletePrompt setPrompt={setPrompt}></DeletePrompt>}
        </div>
    );
};

export default Prompt;