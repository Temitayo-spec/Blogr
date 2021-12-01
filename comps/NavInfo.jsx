/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
import styles from "../styles/navinfo.module.css";

const NavInfo = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <h1>A modern publishing platform</h1>
        <p>Grow your audience and build your online brand</p>

        <div className={styles.flex_btn}>
          <button type="button">Start for Free</button>
          <button type="button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default NavInfo;
