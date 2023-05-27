import ReactDOM from 'react-dom/client';
import React from 'react';

import Root from './Root';

// Styles
import './scss/main.scss';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Root />
        </BrowserRouter>
    </React.StrictMode>
);


