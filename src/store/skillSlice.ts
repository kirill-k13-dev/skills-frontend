import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ISkill} from '../types/data';

type TodosState = {
    list: ISkill[];
}

const initialState: TodosState = {
    list: [],
}

const skillSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: {
        addSkill(state, action: PayloadAction<string>) {
            state.list.push({
                id: Date.now(),
                title: action.payload,
                verified: false,
            });
        },
        toggleVerify(state, action: PayloadAction<number>) {
            const toggledSkill = state.list.find(skill => skill.id === action.payload);
            if (toggledSkill) {
                toggledSkill.verified = !toggledSkill.verified;
            }
        },
        removeSkill(state, action: PayloadAction<number>) {
            state.list = state.list.filter(skill => skill.id !== action.payload);
        }
    },
});

export const {addSkill, toggleVerify, removeSkill} = skillSlice.actions;

export default skillSlice.reducer;
