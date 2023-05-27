import React, { ComponentType } from 'react';

import Layout from '../organisms/Layout';

import type { UniversalTypes } from '../types/UniversalTypes';


export function withLayout(Component: ComponentType<UniversalTypes.IPageProps>) {
    const WrappedComponent = (props: UniversalTypes.IPageProps) => {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };

    return WrappedComponent;

}
