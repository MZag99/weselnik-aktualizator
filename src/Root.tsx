import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

// Pages
// import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';

// HOC
import { withLayout } from './hoc/withLayout';


const Root = () => {

    const [isMobile, setIsMobile] = useState<boolean>(true);

    const onResize = () => {
        const isMobileSize = window.innerWidth < 1024;

        setIsMobile(isMobileSize);
    };

    window.addEventListener('resize', onResize);

    useEffect(() => {
        onResize();
    });

    return (
        isMobile ?
            <h2 className='mobile-disclaimer'>Ta strona jest nieobsługiwana przez urządzenia mobilne</h2> :
            <Routes>
                <Route path='home' element={<HomePage pageTitle='Home' />} />
                {/*<Route path='login' element={<LoginPage pageTitle='Login' />} />*/}
                <Route path='*' element={<NotFoundPage pageTitle='404' />} />
                <Route path='/' element={<Navigate to='/home' />} />
            </Routes>
    );
};

const composedRoot: React.FC = withLayout(Root) as React.FC;

export default composedRoot;