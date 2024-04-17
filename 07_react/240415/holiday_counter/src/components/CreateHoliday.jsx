import React from 'react'

const CreateHoliday = ({ holiday, holidayDate, onChange, onInsert }) => {
    return ( 
        <div>
            <div>
                <label>
                이름
                <input
                name='holiday'
                value={holiday}
                onChange={onChange}
                />
                </label>
            </div>
            <div>
                <label>
                날짜
                <input
                name='holidayDate'
                value={holidayDate}
                onChange={onChange}
                placeholder='YYYY-MM-DD (W)'
                />
                </label>
            </div>
            <button onClick={onInsert}>등록</button>
        </div>
    );
}

export default React.memo(CreateHoliday);