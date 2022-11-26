import React from 'react'
import { useSelector } from 'react-redux';
import Toggle from './Toggle';


export default function Header() {
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
