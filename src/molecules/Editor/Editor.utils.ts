import { EditorTypes } from './Editor.types';

export const removeAt = (arg: string, start: number, end: number) => {
    //console.log(start, end, arg.substring(0, start), arg.substring(end));
    return arg.substring(0, start) + arg.substring(end);
};

export const replaceAt = (arg: string, start: number, replacement: string) => {
    //console.log(arg.substring(0, start), replacement, arg.substring(start));
    return arg.substring(0, start) + replacement + arg.substring(start);
};

export const getChord = (i: number, args: EditorTypes.IChordObj[]): EditorTypes.IChordObj | undefined => {
    return args.find(el => i <= el.posEnd && i >= el.posStart);
};

export const getReplacement = (length: number | null): string => {
    if (length) {
        return '\u200B'.repeat(length);
    } else {
        return '';
    }
};

export const isChordReduntant = (chord: EditorTypes.IChordObj, array: EditorTypes.IChordObj[]): boolean => {
    return array.some(el => el.posStart === chord.posStart);
};