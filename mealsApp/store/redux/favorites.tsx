import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface FavoritesPayload {
    id: string;
}

interface FavoritesState {
    ids: string[]
}

const FavoritesSlice = createSlice({
    name: "favorites",
    initialState: {
        ids: []
    } as FavoritesState,
    reducers: {
        addFavorites: (state, action: PayloadAction<FavoritesPayload>) => {
            state.ids.push(action.payload.id);
        },
        removeFavorites: (state, action: PayloadAction<FavoritesPayload>) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1);
        }
    }
});

// export reducer and actions
export const { addFavorites, removeFavorites } = FavoritesSlice.actions;
export default FavoritesSlice.reducer;
