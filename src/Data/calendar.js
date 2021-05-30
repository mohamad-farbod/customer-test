//doesn't work perfect with react 17

import { useState } from "react";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "@hassanmojab/react-modern-calendar-datepicker";

const Calendar = (props) => {
  const [selectedDay, setSelectedDay] = useState(props.value);
  console.log(props, "calendar");

  const onDateChange = (e) => {
    setSelectedDay(e);
    const date = new Date(e.year, e.month, e.day);
    props.onChange(date);
  };

  return (
    <DatePicker
      value={selectedDay}
      onChange={onDateChange}
      inputPlaceholder="انتخاب تاریخ"
      shouldHighlightWeekends
      locale="fa"
    />
  );
};

export default Calendar;
