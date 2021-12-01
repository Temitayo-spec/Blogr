/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable quotes */
/* eslint-disable arrow-body-style */
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer_ctn}>
      <div className={styles.footer_inner}>
        <img src="/images/logo.svg" alt="" />
        <div className={styles.footer_links_ctn}>
          <div className={styles.footer_links}>
            <h3>Product</h3>
            <a href="#">Overview</a>
            <a href="#">Pricing</a>
            <a href="#">Marketplace</a>
            <a href="#">Features</a>
            <a href="#">Integrations</a>
          </div>
          <div className={styles.footer_links}>
            <h3>Company</h3>
            <a href="#">About</a>
            <a href="#">Team</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
          </div>
          <div className={styles.footer_links}>
            <h3>Connect</h3>
            <a href="#">Contact</a>
            <a href="#">Newsletter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className={styles.attribution}>
        Challenge by
        {" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor.
        </a>
        {" "}
        Coded by
        {' '}
        <a href="#">Temmy</a>
        .
      </div>
    </footer>
  );
};

export default Footer;
