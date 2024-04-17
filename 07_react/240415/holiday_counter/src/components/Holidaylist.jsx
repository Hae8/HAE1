import React from 'react'
import Holiday from "./Holiday";

const HolidayList = ({holidays, onToggle, onDelete}) => {
    return ( 
        <div>
            {holidays.map(holiday => (
                <Holiday key={holiday.id} holiday={holiday} onToggle={onToggle} onDelete={onDelete} />
            ))}
        </div>
    );
}

export default React.memo(HolidayList);