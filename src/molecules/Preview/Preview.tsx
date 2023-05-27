import React, { ReactNode } from 'react';

import { PreviewTypes } from './Preview.types';
import reactStringReplace from 'react-string-replace';


const Preview = ({ content, currentSong }: PreviewTypes.IProps) => {

    const getFormattedText = (text: string): ReactNode => {
        const noPercent = text.replace(/%/g, '');
        const pattern = /\[\[(.*?\]\][^])/;

        const result = reactStringReplace(noPercent, pattern, (match, i) => {
            const content = match.replace('[[', '').split(']]');
            const chord = content[0];
            const text = content[1];

            return <span key={i} className='editor__chord-wrap'><span className='editor__chord'>{chord}</span><span className='editor__plain-text'>{text}</span></span>;
        });

        result.forEach((el, i) => {
            const iPattern = /\[(.*?)\]/;

            if (typeof (el) === 'string') {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                result[i] = reactStringReplace(el, iPattern, (match, i) => {
                    return <span key={i} className='editor__instrumental'>{match}</span>;
                });
            }
        });

        return <span className='editor__plain-text js-plain-text'>{result}</span>;
    };

    return (
        <div className='preview'>
            <div className='preview__content'>
                <div className='preview__phone'>
                    <h3>Sesja</h3>
                    <div className='preview__session-data'>
                        <div className='preview__name'>&quot;{currentSong?.name}&quot;</div>
                        <div className='preview__author'>{currentSong?.author}</div>
                    </div>
                    <div className='preview__text'>
                        <p>
                            {getFormattedText(content)}
                        </p>
                    </div>
                </div>
            </div>
            <div className='preview__decor'></div>
        </div>
    );
};

export default Preview;