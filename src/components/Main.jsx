import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

export default function Main() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.myState)
    return (
        <div className={'main-container ' + state.theme}>
            <div className="main">
                Content
            </div>
        </div>
    )
}
