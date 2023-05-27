import { UniversalTypes } from '../../types/UniversalTypes';

export namespace PreviewTypes {
    export interface IProps {
        currentSong?: UniversalTypes.ISongObject;
        content: string;
    }
}