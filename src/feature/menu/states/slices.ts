import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { MenuState, MenuData } from "./types";
import { mockMenuList } from "./mock";
import { CommonError } from "../../../api/restApi";


export const listMenuAsync = createAsyncThunk<MenuData[], void, {rejectValue: string}> (
    "menu/listMenuAsync",
    async (_, {rejectWithValue}) => {
        try {
            const response = mockMenuList;
            if (!response || !response.data || response.code !== CommonError.INTERNAL_SERVER.message) {
                return rejectWithValue(
                    response?.message || CommonError.INTERNAL_SERVER.message
                )
            }
            return response.data;
        } catch (error) {
            return rejectWithValue(
                (error as Error).message || CommonError.INTERNAL_SERVER.message
            )
        }
    }
)

const initialState: MenuState = {
    menuList: [],
    loaded: false
}

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(listMenuAsync.fulfilled, (state, action) => {
            state.menuList = action.payload;
            state.loaded = true;
        })
    }
})

export default menuSlice.reducer;