import { UniversalTypes } from '../../types/UniversalTypes';

export namespace EditorTypes {
    export interface IProps {
        inputValue: string;
        currentSong: UniversalTypes.ISongObject;
        setInputValue: (arg?: any) => void;
        setIsPrompt: (arg: UniversalTypes.IPromptState) => void;
    }

    export interface ISelectedObj {
        start: number;
        end: number;
        selectedText: string;
    }

    export interface IChordObj {
        posStart: number;
        posEnd: number;
        content: string;
    }
}