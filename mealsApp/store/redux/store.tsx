import { configureStore } from "@reduxjs/toolkit";


export const store= configureStore({
    reducer:{}
})

// infering the type of rootstate and app dispatch


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch