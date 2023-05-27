export namespace PromptTypes {
    export interface IProps {
        setPrompt: (arg?: any) => void;
        inputValue: string;
        promptType: 'delete' | 'add';
    }
    
    export interface IPrompt {
        setPrompt: (arg?: any) => void;
        inputValue?: string;
    }
}