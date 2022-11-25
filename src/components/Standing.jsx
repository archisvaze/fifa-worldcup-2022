import React from 'react'
import { useEffect } from 'react';
import Team from './Team'

export default function Standing(props) {
    let obj = props.obj
    let teams = obj.teams.sort((a, b) => -a.pts + b.pts);
    useEffect(() => {
        teams.sort((a, b) => -a.pts + b.pts);
        // eslint-disable-next-line
    }, [])
    return (
        <div className='standing'>
            <p className='standing-group'>Group {obj.group}</p>
            <div className="teams">
                {teams.sort((a, b) => -a.pts + b.pts).map(team => {
                    return (
                        <Team key={team._id} obj={team} />
                    )
                })}
            </div>

        </div>
    )
}
