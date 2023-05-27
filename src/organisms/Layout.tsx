import React, { ReactNode } from 'react';

import Header from './Header';
import packageInfo from '../../package.json';

interface ILayout {
    children: ReactNode;
}


const Layout = ({ children }: ILayout) => {
    return (
        <>
            <Header />
            <article>
                {children}
            </article>
            <footer>
                Weselnik aktualizator<br/>
                (Wersja: {packageInfo.version})
            </footer>
        </>
    );
};

export default Layout;