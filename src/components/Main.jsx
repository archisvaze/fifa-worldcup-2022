import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from './Loading';
import Match from './Match';
import Standing from './Standing';


export default function Main() {
    // eslint-disable-next-line
    const dispatch = useDispatch();
    const state = useSelector(state => state.myState);
    const [standings, setstandings] = useState([])
    const [matches, setmatches] = useState([])
    const [loading1, setloading1] = useState(true)
    const [loading2, setloading2] = useState(true)

    const getTodaysMatches = () => {
        setloading1(true);
        fetch("https://fifa-server.onrender.com/today")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.data) {
                    setmatches(data.data);
                    setloading1(false);
                }
            })
    }

    const getStandings = () => {
        setloading2(true);
        fetch("https://fifa-server.onrender.com/standings")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.data) {
                    setstandings(data.data);
                    setloading2(false);
                }
            })
    }

    useEffect(() => {
        getTodaysMatches();
        getStandings();
        // eslint-disable-next-line
    }, [])

    return (
        <div className={'main-container ' + state.theme}>
            <div className="main">
                <h2>Today's Matches {loading1 === true ? <Loading /> : <></>}</h2>
                <div className="matches-container">
                    {matches ? matches.map(obj => {
                        return (
                            <Match key={obj._id} obj={obj} />
                        )
                    }) : <></>}
                </div>

                <h2>Standings {loading2 === true ? <Loading /> : <></>}</h2>

                <div className="standing-container">
                    {standings ? standings.map(obj => {
                        return (
                            <Standing key={obj._id} obj={obj} />
                        )
                    }) : <></>}
                </div>

            </div>
        </div>
    )
}
