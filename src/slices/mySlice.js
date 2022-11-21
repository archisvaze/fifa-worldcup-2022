import { createSlice } from "@reduxjs/toolkit";
let initialState = {};
initialState = {
    theme: "light",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdhZTU0YmZkOWFhYzIyNjc3N2U0OTIiLCJpYXQiOjE2Njg5OTg1MDAsImV4cCI6MTY2OTA4NDkwMH0.37HmVEIMUuhxfNvctOaUliuIO1HgP7CmPty2G0SUxHA",
};

const mySlice = createSlice({
    name: "mySlice",
    initialState: initialState,
    reducers: {
        toggleTheme: (state, action) => {
            if (state.theme === "light") {
                state.theme = "dark"
            } else state.theme = "light";
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },

    }

})


export const { toggleTheme, setToken } = mySlice.actions;
export default mySlice.reducer;