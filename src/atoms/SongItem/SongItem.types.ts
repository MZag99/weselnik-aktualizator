import { UniversalTypes } from '../../types/UniversalTypes';

export namespace SongItemTypes {
    export interface IProps {
        song: UniversalTypes.ISongObject;
        promptDelete: (arg?: any) => void;
    }
}