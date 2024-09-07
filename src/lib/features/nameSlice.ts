import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {API} from "@/api";


const initialState: NameState = {
    names: [],
    loading: false,
    isModal: false
};
export const fetchUsers = createAsyncThunk(
    'name/fetch',
    async () => {
        const response = await API.fetchGenres()
        return response.data
    },
)
export const updateUsers = createAsyncThunk(
    'name/update',( id: string) => id,
)
export const updateModal = createAsyncThunk(
    'name/modal',( value: boolean) => value,
)
const nameSlice = createSlice({
    name: 'name',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                const mapped = action.payload.results.map(user => ({
                    id: user.email,
                    name: `${user.name.first} ${user.name.last}`,
                    isChecked: false
                }))
                state.names = mapped;
                state.loading = false;
            })
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.loading = false;
            })
            .addCase(updateUsers.fulfilled, (state, action) => {
                state.names = state.names.map(name => name.id === action.payload ? {...name, isChecked: true} : {
                    ...name,
                    isChecked: false
                })
            })
            .addCase(updateModal.fulfilled, (state, action) => {
                state.isModal = action.payload;
            })
        ;
    },
    reducers: {
        updateChecked: (state, action: PayloadAction<string>) => {
            state.names = state.names.map(name => name.id === action.payload ? {...name, isChecked: true} : {
                ...name,
                isChecked: false
            })
        },
        updateIsModal: (state, action: PayloadAction<boolean>) => {
            state.isModal = action.payload
        }

    },
});

export const {updateChecked, updateIsModal} = nameSlice.actions;
export default nameSlice.reducer;

interface NameState {
    names: NameData[]
    loading: boolean;
    isModal: boolean;
}

interface NameData {
    id: string;
    name: string;
    isChecked: boolean;
}
