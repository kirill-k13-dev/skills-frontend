import {AnyAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {IResponseDeleteSkill, IResponseSkill, IResponseSkills, ISkill} from '../types/data';

type SkillsState = {
    list: ISkill[];
    loading: boolean;
    error: string | null;
}

const initialState: SkillsState = {
    list: [],
    loading: false,
    error: null,
}

export const fetchSkills = createAsyncThunk<ISkill[], undefined, { rejectValue: string }>(
    'skills/fetchSkills',
    async function (_, {rejectWithValue}) {
        const response = await fetch(`${process.env.REACT_APP_NODE_API_URL}/skills`);
        if (!response.ok) {
            return rejectWithValue('Server Error');
        }

        const responseData: IResponseSkills = await response.json();
        if (responseData.status !== 200) {
            return rejectWithValue('Server Error');
        }

        return responseData.skills;
    }
);

export const addSkill = createAsyncThunk<ISkill, string, { rejectValue: string }>(
    'skills/addSkill',
    async function (text, {rejectWithValue}) {
        const requestData = {
            title: text,
            verified: false
        };

        const response = await fetch(`${process.env.REACT_APP_NODE_API_URL}/skill`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        });
        if (!response.ok) {
            return rejectWithValue('Server Error');
        }

        const responseData: IResponseSkill = await response.json();
        if (responseData.status !== 200) {
            return rejectWithValue('Server Error');
        }

        return responseData.skill;
    }
);

export const toggleVerifySkill = createAsyncThunk<ISkill, number, {
    rejectValue: string,
    state: { skills: SkillsState }
}>(
    'skills/toggleVerifySkill',
    async function (id, {rejectWithValue, getState}) {
        const skill = getState().skills.list.find(skill => skill.id === id);

        if (!skill) {
            return rejectWithValue('No such skill in the list');
        }

        const requestData = {
            id,
            verified: !skill.verified
        };
        const response = await fetch(`${process.env.REACT_APP_NODE_API_URL}/skill`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        });
        if (!response.ok) {
            return rejectWithValue('Server Error');
        }

        const responseData: IResponseSkill = await response.json();
        if (responseData.status !== 200) {
            return rejectWithValue('Server Error');
        }

        return responseData.skill;
    }
);

export const removeSkill = createAsyncThunk<number, number, { rejectValue: string, state: { skills: SkillsState } }>(
    'skills/removeSkill',
    async function (id, {rejectWithValue, getState}) {
        const skill = getState().skills.list.find(skill => skill.id === id);

        if (!skill) {
            return rejectWithValue('No such skill in the list');
        }

        const response = await fetch(`${process.env.REACT_APP_NODE_API_URL}/skill/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            return rejectWithValue('Server Error');
        }

        const responseData: IResponseDeleteSkill = await response.json();
        if (responseData.status !== 200) {
            return rejectWithValue('Server Error');
        }

        return responseData.id;
    }
);

const skillSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: {
        // addSkill(state, action: PayloadAction<string>) {
        //     state.list.push({
        //         id: Date.now(),
        //         title: action.payload,
        //         verified: false,
        //     });
        // },
        // toggleVerify(state, action: PayloadAction<number>) {
        //     const toggledSkill = state.list.find(skill => skill.id === action.payload);
        //     if (toggledSkill) {
        //         toggledSkill.verified = !toggledSkill.verified;
        //     }
        // },
        // removeSkill(state, action: PayloadAction<number>) {
        //     state.list = state.list.filter(skill => skill.id !== action.payload);
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSkills.fulfilled, (state, action) => {
                state.list = action.payload;
                state.loading = false;
            })
            .addCase(addSkill.fulfilled, (state, action) => {
                state.list.push(action.payload);
                state.loading = false;
            })
            .addCase(toggleVerifySkill.fulfilled, (state, action) => {
                const toggledSkill = state.list.find(skill => skill.id === action.payload.id);
                if (toggledSkill) {
                    toggledSkill.verified = action.payload.verified;
                }
                state.loading = false;
            })
            .addCase(removeSkill.fulfilled, (state, action) => {
                state.list = state.list.filter(skill => skill.id !== action.payload);
                state.loading = false;
            })

            .addMatcher(isPending, (state, action) => {
                state.error = null;
                state.loading = action.type !== 'skills/toggleVerifySkill/pending';
            })
            .addMatcher(isError, (state, action) => {
                console.error(action);
                state.error = action.error.message;
                state.loading = false;
            })

    }
});

// For reducers
//export const {addSkill, toggleVerify, removeSkill} = skillSlice.actions;

export default skillSlice.reducer;

function isError(action: AnyAction) {
    return action.type.endsWith('rejected');
}

function isPending(action: AnyAction) {
    return action.type.endsWith('pending');
}
