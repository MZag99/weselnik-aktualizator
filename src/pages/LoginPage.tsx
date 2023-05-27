import React from 'react';

import Section from '../organisms/Section';

import { UniversalTypes } from '../types/UniversalTypes';
import LoginPanel from '../organisms/LoginPanel';


const LoginPage = ({ pageTitle }: UniversalTypes.IPageProps) => {
    return (
        <Section pageTitle={pageTitle}>
            <LoginPanel />
        </Section>

    );
};

export default LoginPage;