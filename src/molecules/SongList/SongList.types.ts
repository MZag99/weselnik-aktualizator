import { UniversalTypes } from '../../types/UniversalTypes';

export namespace SongListTypes {
    export interface IProps {
        songs?: UniversalTypes.ISongObject[];
        promptAdd: any;
        promptDelete: any;
    }
}