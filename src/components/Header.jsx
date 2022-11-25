import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from "../slices/mySlice"
import Toggle from './Toggle';


export default function Header() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.myState)
    return (
        <div className={'header-container ' + state.theme}>

            <header className="header">

                <div className="left">
                    <h3>FIFA World Cup 2022</h3>
                </div>

                <div className="right">

                    <Toggle />

                </div>
            </header>
        </div>
    )
}
