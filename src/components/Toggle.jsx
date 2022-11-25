import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../slices/mySlice';


export default function Toggle() {

    const dispatch = useDispatch();
    const state = useSelector(state => state.myState)


    const handleOnClick = () => {
        dispatch(toggleTheme())
    }

    const handleKeypress = e => {
        if (e.code === "Enter") {
            dispatch(toggleTheme())
        }
    }

    return (
        <div className="toggle-container" style={{ color: state.theme === "dark" ? "#63687e" : "#bcc1d4" }}>
            <label className="switch" htmlFor="toggle">
                <input aria-label="dark mode toggle" role="switch" onKeyPress={handleKeypress} onClick={handleOnClick} type="checkbox" id="toggle" checked={state.theme === "dark" ? true : false}
                />
                <span className="slider"></span>
            </label>
        </div>
    )
}
