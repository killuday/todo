import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todo/todoSlice'
export const store = configureStore({
    reducer:todoReducer
})
export type IRootState = ReturnType<typeof store.getState>