import { combineReducers } from "redux";
import { UserReducer } from "./UserReducer";

/**
 * notes
 * 1. Typy (export type AppState)
 */


export const rootReducer = combineReducers({
    user: UserReducer
})

export type AppState = ReturnType<typeof rootReducer>