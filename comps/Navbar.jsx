/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
import { useState } from "react";
import styles from "../styles/navbar.module.css";
import NavInfo from "./NavInfo";
import NavLink from "./NavLink"

const Navbar = () => {
  const [burger, setBurger] = useState(true);
  return (
    <div className={styles.wrapper}>
      <div className={styles.bg}>
        <img src="/images/bg-pattern-intro.svg" alt="" />
      </div>
      <div className={styles.inner}>
        <div className={styles.lhs}>
          <img src="/images/logo.svg" alt="" />
          <div className={styles.hamburger}>
            {burger === true ? (
              <img
                onClick={() => setBurger(false)}
                src="/images/icon-hamburger.svg"
                alt=""
              />
            ) : (
              <img
                onClick={() => setBurger(true)}
                src="/images/icon-close.svg"
                alt=""
              />
            )}
          </div>
        </div>

        <nav
          className={`${styles.rhs} ${
            burger === false ? styles.rhs_active : styles.rhs
          }`}
        >
          <NavLink />
        </nav>
      </div>
      <NavInfo />
    </div>
  );
};

export default Navbar;
