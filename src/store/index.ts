import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './skillSlice';

const store = configureStore({
    reducer: {
        skills: todosReducer
    }
});

export default store;

export type RootSate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

