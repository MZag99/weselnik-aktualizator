import React, { useState } from 'react';

import CustomInput from '../molecules/CustomInput/CustomInput';
import Button from '../atoms/Button/Button';
import { Navigate } from 'react-router-dom';


const LoginPanel = () => {

    const [isLogged, setIsLogged] = useState<boolean>(false);

    const onClick = (e: Event): void => {
        e.preventDefault();
        setIsLogged(true);
    };

    return (
        <div className='login-panel'>
            {isLogged && (<Navigate to='/home' />)}
            <h2>Weselnik.</h2>
            <p>Aktualizator</p>
            <form>
                <Button copy='zaloguj' onClick={onClick} />
            </form>
        </div>
    );
};

export default LoginPanel;