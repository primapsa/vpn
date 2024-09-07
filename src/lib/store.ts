import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './features/nameSlice';

export const nameStore = () => {
    return configureStore({
        reducer: {
            users: bookSlice,
        },
    });
};

export type AppStore = ReturnType<typeof nameStore>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
