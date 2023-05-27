import React, { ReactNode, useEffect } from 'react';

interface ISection {
    pageTitle: string;
    children: ReactNode;
}

const Section = ({ pageTitle, children }: ISection) => {

    useEffect(() => {
        document.title = `Aktualizator - ${pageTitle}`;
    }, []);

    return (
        <section className={`section section--${pageTitle.toLowerCase()}`}>
            { children }
        </section>
    );
};

export default Section;