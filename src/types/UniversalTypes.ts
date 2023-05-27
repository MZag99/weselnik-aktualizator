import { Firestore } from 'firebase/firestore';
import { MutableRefObject } from 'react';

export namespace UniversalTypes {
    export interface IPageProps {
        pageTitle: string;
    }

    export interface ISongObject {
        name: string;
        author: string;
        id: number;
        text: string;
        isChanged?: boolean;
    }

    export interface IPromptState {
        isVisible: boolean;
        type: 'add' | 'delete';
    }

    export interface IUniversalContext {
        setInputValue?: (arg?: any) => void;
        setCurrentSong?: (arg: ISongObject) =>  void;
        currentSong?: ISongObject;
        db?: any;
        tempSongs?: MutableRefObject<UniversalTypes.ISongObject[]>;
        toDelete?: MutableRefObject<UniversalTypes.ISongObject | undefined>;
    }
}
