import React, { useState, useEffect } from "react";
import styles from "./Login.module.css";

import Calendar from "./../../Data/calendar";

// const mobCheck = /^09\d{9}$/;

const Login = () => {
  const [form, setForm] = useState({
    mobile: "",
    name: "",
    email: "",
    gender: "",
    birthday: "",
    job: "",
  });

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    if (
      form.mobile &&
      form.name &&
      form.email &&
      form.gender &&
      form.birthday &&
      form.job
    ) {
      setFormIsValid(true);
    } else setFormIsValid(false);
  }, [form]);

  const setMobile = (e) => {
    setForm({ ...form, mobile: e.target.value });
  };

  const setName = (e) => {
    setForm({ ...form, name: e.target.value });
  };

  const setEmail = (e) => {
    setForm({ ...form, email: e.target.value });
  };

  const setGender = (e) => {
    setForm({ ...form, gender: e.target.value });
  };

  const setBirthday = (e) => {
    console.log(e, "set birthdat");
    setForm({ ...form, birthday: e });
  };

  const setJob = (e) => {
    setForm({ ...form, job: e.target.value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert("اطلاعات شما ذخیره شد");
  };
  const formResetHandler = () => {
    setForm({
      mobile: "",
      name: "",
      email: "",
      gender: "",
      birthday: "",
      job: "",
    });
  };

  return (
    <div className={styles.layout}>
      <h3>پروفایل</h3>
      <div className={styles.main}>
        <form onSubmit={(e) => formSubmit(e)}>
          <div className={styles.inputElement}>
            <label htmlFor="mobileNumber">شماره موبایل</label>
            <input
              type="text"
              name="mobileNumber"
              placeholder="09xxxxxxxxx"
              value={form.mobile}
              onChange={(e) => setMobile(e)}
            />
          </div>
          <div className={styles.inputElement}>
            <label htmlFor="fullName">نام و نام خانوادگی</label>
            <input
              type="text"
              name="fullName"
              value={form.name}
              onChange={(e) => setName(e)}
            />
          </div>
          <div className={styles.inputElement}>
            <label htmlFor="mail">ایمیل</label>
            <input
              type="email"
              name="mail"
              value={form.email}
              onChange={(e) => setEmail(e)}
            />
          </div>

          <div
            className={styles.gender}
            value={form.gender}
            onChange={(e) => setGender(e)}
          >
            <label htmlFor="gender" className={styles.genderLabel}>
              جنسیت
            </label>
            <input type="radio" name="gender" value="male" />
            <label htmlFor="male">مرد</label>
            <input type="radio" name="gender" value="female" />
            <label htmlFor="male">زن</label>
          </div>

          <div className={styles.inputElement}>
            <label htmlFor="birthday">تاریخ تولد</label>
            {/* <input
              type="date"
              name="birthday"
              value={form.birthday}
              onChange={(e) => setBirthday(e)}
            /> */}
            <Calendar value={form.birthday} onChange={(e) => setBirthday(e)} />
          </div>
          <div className={styles.inputElement}>
            <label htmlFor="job">شغل</label>
            <input
              type="text"
              name="job"
              value={form.job}
              onChange={(e) => setJob(e)}
            />
          </div>
          <div className={styles.btnMargin}>
            <button
              className={`${styles.btn} ${
                formIsValid ? styles.save : styles.disabled
              }`}
              type="submit"
              disabled={!formIsValid}
            >
              ذخیره
            </button>
            <button
              onClick={formResetHandler}
              type="button"
              className={`${styles.btn} ${styles.cancel}`}
            >
              انصراف
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
