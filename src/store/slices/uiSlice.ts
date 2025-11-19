import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UIState, Token } from '@/types';

const initialState: UIState = {
    isModalOpen: false,
    selectedToken: null,
    sortConfig: null,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setModalOpen: (state, action: PayloadAction<boolean>) => {
            state.isModalOpen = action.payload;
        },
        setSelectedToken: (state, action: PayloadAction<Token | null>) => {
            state.selectedToken = action.payload;
        },
        setSortConfig: (state, action: PayloadAction<{ key: keyof Token; direction: 'asc' | 'desc' } | null>) => {
            state.sortConfig = action.payload;
        },
    },
});

export default uiSlice.reducer;
