import React from 'react';
import Section from '../organisms/Section';

import { Link } from 'react-router-dom';

import { UniversalTypes } from '../types/UniversalTypes';

const NotFoundPage = ({ pageTitle}: UniversalTypes.IPageProps) => {
    return (
        <Section pageTitle={pageTitle}>
            <div className='not-found'>
                <h2>Nie znaleziono strony!</h2>
                <Link to='/'>Powrót to strony głównej</Link>
            </div>
        </Section>
    );
};

export default NotFoundPage;