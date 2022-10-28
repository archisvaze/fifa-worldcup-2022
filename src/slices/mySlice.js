import { createSlice } from "@reduxjs/toolkit";
let initialState = {};
initialState = { theme: "light", };

const mySlice = createSlice({
    name: "mySlice",
    initialState: initialState,
    reducers: {
        toggleTheme: (state, action) => {
            if (state.theme === "light") {
                state.theme = "dark"
            } else state.theme = "light";
        },

    }

})


export const { toggleTheme } = mySlice.actions;
export default mySlice.reducer;