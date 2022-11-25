import React from 'react'

export default function Team(props) {
    let obj = props.obj;
    return (
        <div className='team'>
            <div className="team-left">
                <img src={obj.flag} alt="flag" />
                <p>{obj.name_en}</p>
            </div>
            <div className="team-right">
                <p style={{ color: Number(obj.pts) >= 3 ? "var(--green)" : Number(obj.pts) === 0 ? "red" : "var(--text-color)" }}>{obj.pts}</p>
            </div>

        </div>
    )
}
