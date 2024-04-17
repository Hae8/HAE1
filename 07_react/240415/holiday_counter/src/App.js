import './App.css';
import React, { useState, useCallback, useRef, useMemo } from 'react';
import HolidayList from './components/Holidaylist';
import CreateHoliday from './components/CreateHoliday';


function App() {

  const [holidays, setHolidays] = useState([
    {id: 1, holiday:'어린이날', holidayDate:'2024-05-05 (일)', dday30: true},
    {id: 2, holiday:'대체공휴일', holidayDate:'2024-05-06 (월)', dday30: true},
    {id: 3, holiday:'부처님오신날', holidayDate:'2024-05-15 (수)', dday30: true},
    {id: 4, holiday:'현충일', holidayDate:'2024-06-06 (목)', dday30: false}
  ]);

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setInputs(inputs => ({
      ...inputs,
      [name]: value
    }))
  },[])

  const [inputs, setInputs] = useState({
    holiday: '',
    holidayDate: ''
  });

  const nextId = useRef(5)
  const {holiday, holidayDate} = inputs;

  const onInsert = useCallback(() => {
    if (holiday === '' || holidayDate === ''){
      return;
    }
    const newHoliday = { id: nextId.current, holiday, holidayDate, active: false }
    setHolidays(holidays => holidays.concat(newHoliday));
    setInputs({ holiday:'', holidayDate:'' });
    nextId.current++;
  }, [inputs])

  const onToggle = useCallback((id) => {
    setHolidays(
      holidays =>
        holidays.map (holiday =>
          holiday.id === id ? {...holiday, dday30: !holiday.dday30} : holiday)
      )
  }, [])

  const onDelete = useCallback((id) => {
    setHolidays(
      holidays => holidays.filter(holiday => holiday.id !== id)
    )
  }, [])

  const counter = holiday => {
    return holiday.filter(holiday => holiday.dday30).length
  }

  const count = useMemo(() => counter(holidays), [holidays])

  return (
    <div className="App">
      <h1>공휴일 계산기</h1>
      <CreateHoliday holiday={holiday} holidayDate={holidayDate} onChange={onChange} onInsert={onInsert}/>
      <HolidayList holidays={holidays} onToggle={onToggle} onDelete={onDelete}/>
      <div className='counter'>한 달 내로 찾아올 공휴일의 수는? {count}개</div>
    </div>
  );
}

export default App;
