/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Arrows from "./arrows";
import * as actionTypes from "../../Store/actions";
import styles from "./Sidebar.module.css";

import { connect } from "react-redux";

const SidebarItems = (props) => {
  const [expand, setExpand] = useState(false);
  const [value, setValue] = useState(4);

  const subListSelect = (index) => {
    if (index === 0) {
      props.isAdmin();
    } else if (index === 1) {
      props.notAdmin();
    }
  };

  return (
    <li
      key={Math.random()}
      className={`${styles.sidebarList}  ${expand ? styles.active : null}`}
    >
      <a href="#" onClick={() => setExpand(!expand)}>
        {props.name}
      </a>
      <Arrows expand={expand} />
      {props.children && expand && (
        <ul className={styles.subListWarning}>
          {props.children.map((item, index) => (
            <li
              onClick={() => {
                setValue(index);
                subListSelect(index);
              }}
              key={Math.random()}
              className={`${styles.subList} ${
                index === value ? styles.listActive : null
              } `}
            >
              <h5>{item}</h5>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    isAdmin: () => dispatch({ type: actionTypes.IS_ADMIN }),
    notAdmin: () => dispatch({ type: actionTypes.NOT_ADMIN }),
  };
};

export default connect(null, mapDispatchToProps)(SidebarItems);
