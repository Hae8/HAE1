import React from 'react'
const Holiday = ({ holiday, onToggle, onDelete }) => {

    const style = {
        fontWeight: 800,
        color: holiday.dday30 ? 'salmon' : 'grey'
    }

    return ( 
        <div>
            <div key={holiday.id}>
            <span onClick={() => onToggle(holiday.id)} style={style}>{holiday.holiday}</span>
            <span>{holiday.holidayDate}</span>
            <button onClick={() => onDelete(holiday.id)}>삭제</button>
            </div>
        </div>
    );
}

export default React.memo(Holiday);