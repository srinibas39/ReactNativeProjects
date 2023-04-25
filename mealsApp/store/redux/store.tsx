import { configureStore } from "@reduxjs/toolkit";

import FavoriteReducer from "./favorites"
export const store= configureStore({
    reducer:{
        favoriteMeals:FavoriteReducer
    }
})

// infering the type of rootstate and app dispatch


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch