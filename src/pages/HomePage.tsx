import React from 'react';

import { UniversalTypes } from '../types/UniversalTypes';

import Section from '../organisms/Section';
import MainPanel from '../organisms/MainPanel';


const HomePage = ({ pageTitle }: UniversalTypes.IPageProps) => {

    return (
        <Section pageTitle={pageTitle}>
            <MainPanel />
        </Section>
    );
};

export default HomePage;
