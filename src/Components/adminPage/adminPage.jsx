import React, { useEffect, useState } from "react";
import styles from "./adminPage.module.css";
import search from "../../Images/search.jpg";

import axios from "axios";

import Calendar from "./../../Data/calendar";
const AdminPage = () => {
  const [list, setList] = useState([]);
  const [allData, setAllData] = useState([]);
  const [date, setDate] = useState({ start: null, end: null });

  const placeHolder = "شناسه،  نام کاربری،  اسم،  ایمیل";

  useEffect(
    () =>
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          setList(res.data.slice(0, 4));
          setAllData(res.data.slice(0, 4));
        })
        .catch((err) => alert(err)),
    []
  );

  const setStartDate = (start) => setDate({ ...date, start });
  const setEndDate = (end) => setDate({ ...date, end });

  console.log(allData);
  const onSearchHandler = (e) => {
    const value = e.target.value;
    const newList = allData.filter(
      ({ name, email, username, id }) =>
        !value ||
        [name, email, username, "" + id].some(
          (x) => x.toLowerCase().indexOf(value.toLowerCase()) >= 0
        )
    );
    setList(newList);
  };

  return (
    <div className={styles.layout}>
      <div className={styles.calendarContainer}>
        <h3>مدیریت مشتریان</h3>
        <div className={styles.calendar}>
          <div className={styles.singleCalendar}>
            <label htmlFor="startDate">از تاریخ</label>
            <Calendar value={date.start} onChange={setStartDate} />
            {/* <input type="date" name="startDate" /> */}
          </div>
          <div className={styles.singleCalendar}>
            <label htmlFor="endDate">تا تاریخ</label>
            <Calendar value={date.end} onChange={setEndDate} />
            {/* <input type="date" name="endDate" /> */}
          </div>
        </div>
      </div>
      <div>
        <div className={styles.main}>
          <div>
            <div>
              <h3>
                مشتریان
                <span className={styles.costumerNum}>
                  {list && list.length}
                </span>
              </h3>
            </div>
            <div className={styles.searchBar}>
              <input
                type="text"
                placeholder={placeHolder}
                onChange={(e) => onSearchHandler(e)}
              />
              <img src={search} alt="" />
              <select name="id">
                <option value="14001">14001</option>
                <option value="14002">14002</option>
                <option value="14003">14003</option>
                <option value="14004">14004</option>
              </select>
            </div>

            <table className={styles.table}>
              <thead>
                <tr>
                  <th>شناسه</th>
                  <th>نام کاربری</th>

                  <th>اسم</th>
                  <th>ایمیل</th>
                  {/* <th>وبسایت</th> */}
                </tr>
              </thead>
              <tbody>
                {list.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id + 14000}</td>
                    <td>{item.username}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    {/* <td>{item.website}</td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
