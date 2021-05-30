/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./Sidebar.module.css";

import SidebarItems from "./sidebarItems";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul>
        <SidebarItems name="پیشخوان" />
        <SidebarItems name="سفارشات" />
        <SidebarItems name="مشتریان">
          {["مدیریت مشتریان", "پروفایل"]}
        </SidebarItems>
        <SidebarItems name="گزارش" />
        <SidebarItems name="مدیریت" />
      </ul>
    </div>
  );
};

export default Sidebar;
