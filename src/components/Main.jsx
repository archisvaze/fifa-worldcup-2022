import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Main() {
    // eslint-disable-next-line
    const dispatch = useDispatch();
    const state = useSelector(state => state.myState);

    console.log(process.env.REACT_APP_EMAIL);

    const login = () => {
        const reqOptions = {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${state.token}`,
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(
                {
                    email: process.env.REACT_APP_EMAIL,
                    password: process.env.REACT_APP_PASSWORD
                }
            )
        }
        fetch("http://api.cup2022.ir/api/v1/standings/", reqOptions)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    useEffect(() => {
        login();
    }, [])

    return (
        <div className={'main-container ' + state.theme}>
            <div className="main">
                <h1>Main</h1>
            </div>
        </div>
    )
}
