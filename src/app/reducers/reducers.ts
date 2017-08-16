import {Action} from '@ngrx/store';

export interface ScoreState{
    score: number
}

export function ScoreReducer(state: number = 0, action: Action){
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'RESET':
            return 0;
        default:
            return state;
    }
}