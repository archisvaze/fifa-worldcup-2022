import React from 'react'

export default function Match(props) {
    const matchStatus = {
        "notstarted": "Not Started",
        "h1": "First Half",
        "h2": "Second Half",
        "hf": "Half Time",
        "finished": "Finished"
    }
    
    let obj = props.obj;
    return (
        <div className='match'>
            <p className='group'>Group {obj.group}</p>
            <div className="match-flags-container">
                <div className="team-container">
                    <img src={obj.away_flag} alt="" />
                    <p>{obj.away_team_en}</p>
                    <p>{obj.time_elapsed === "notstarted" ? "-" : obj.away_score}</p>
                </div>
                <div className="team-container">
                    <img src={obj.home_flag} alt="" />
                    <p>{obj.home_team_en}</p>
                    <p>{obj.time_elapsed === "notstarted" ? "-" : obj.home_score}</p>
                </div>
            </div>
            <p style={{ backgroundColor: obj.time_elapsed === "notstarted" ? "grey" : obj.time_elapsed === "h1" ? "green" : obj.time_elapsed === "hf" ? "#cfbc15" : obj.time_elapsed === "h2" ? "green" : "red" }} className='status'>{matchStatus[obj.time_elapsed]}</p>
        </div>
    )
}
