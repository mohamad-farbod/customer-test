import styles from "./Navbar.module.css";
import duck from "../../Images/duck.jpg";
import navbarData from "../../Data/navbarData";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Navbar = (props) => {
  return (
    <>
      {props.isAdmin ? <Redirect to="/admin" /> : <Redirect to="/" />}

      <div className={styles.navbar}>
        <div className={styles.duck}>
          <img src={duck} alt="" />
          <h3>پرینتر همراه</h3>
        </div>

        <div className={styles.icons}>
          <div className={styles.iconContainer}>
            <img src={navbarData[0].src} alt="" />
          </div>
          <div className={styles.iconContainer}>
            <span className={styles.messageCount}>{props.notifications}</span>

            <img src={navbarData[1].src} alt="" />
          </div>
          <div className={styles.iconContainer}>
            <span className={styles.messageCount}>{props.messages}</span>

            <img src={navbarData[2].src} alt="" />
          </div>
          <div className={styles.iconContainer}>
            <span
              className={`${styles.messageCount} ${
                props.isAdmin ? null : styles.bottom
              }`}
            ></span>

            <img src={navbarData[3].src} alt="" />
          </div>
          {/* {navbarData.map((item) => (
            <img src={item.src} alt="" key={item.id} /> */}
          {/* ))} */}
          <h3>نام کارمند</h3>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    notifications: state.notifications,
    isAdmin: state.isAdmin,
  };
};

export default connect(mapStateToProps)(Navbar);
