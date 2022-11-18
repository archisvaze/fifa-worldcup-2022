import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from "../slices/mySlice"

export default function Header() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.myState)
    return (
        <div className={'header-container ' + state.theme}>

            <div className="header">

                <div className="left">
                    <h2>Header</h2>
                </div>

                <div className="right">

                    <div className="toggle-container">
                        <label className="switch">
                            <input type="checkbox"
                                onClick={() => dispatch(toggleTheme())} />
                            <span className="slider"></span>
                        </label>
                    </div>

                </div>
            </div>
        </div>
    )
}
