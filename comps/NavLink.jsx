/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
import { useState } from "react";
import styles from "../styles/navlink.module.css";

const NavLink = () => {
  const [product, setProduct] = useState(false);
  const [company, setCompany] = useState(false);
  const [connect, setConnect] = useState(false);
  if (typeof window !== "undefined") {
    return (
      <div className={styles.container}>
        <ul>
          <div className={styles.links}>
            <div className={styles.dropdown}>
              <li onClick={() => setProduct(!product)}>
                <p className={product === true ? styles.col : null}>
                  Product
                  <span>
                    {window.innerWidth < 600 ? (
                      <img
                        className={product === true ? styles.spin : styles.norm}
                        src="/images/icon-arrow-dark.svg"
                        alt=""
                      />
                    ) : (
                      <img
                        className={product === true ? styles.spin : styles.norm}
                        src="/images/icon-arrow-light.svg"
                        alt=""
                      />
                    )}
                  </span>
                </p>
              </li>

              <div
                className={`${styles.dropbox} ${
                  product === true ? styles.active_dropbox : styles.dropbox
                }`}
              >
                <p>Overview</p>
                <p>Pricing</p>
                <p>Marketplace</p>
                <p>Features</p>
                <p>Integrations</p>
              </div>
            </div>

            <div className={styles.dropdown}>
              <li onClick={() => setCompany(!company)}>
                <p className={company === true ? styles.col : null}>
                  Company
                  <span>
                    {window.innerWidth < 600 ? (
                      <img
                        className={company === true ? styles.spin : styles.norm}
                        src="/images/icon-arrow-dark.svg"
                        alt=""
                      />
                    ) : (
                      <img
                        className={company === true ? styles.spin : styles.norm}
                        src="/images/icon-arrow-light.svg"
                        alt=""
                      />
                    )}
                  </span>
                </p>
              </li>

              <div
                className={`${styles.dropbox} ${
                  company === true ? styles.active_dropbox : styles.dropbox
                }`}
              >
                <p>About</p>
                <p>Team</p>
                <p>Blog</p>
                <p>Careers</p>
              </div>
            </div>

            <div className={styles.dropdown}>
              <li onClick={() => setConnect(!connect)}>
                <p className={connect === true ? styles.col : null}>
                  Connect
                  <span>
                    {window.innerWidth < 600 ? (
                      <img
                        className={connect === true ? styles.spin : styles.norm}
                        src="/images/icon-arrow-dark.svg"
                        alt=""
                      />
                    ) : (
                      <img
                        className={connect === true ? styles.spin : styles.norm}
                        src="/images/icon-arrow-light.svg"
                        alt=""
                      />
                    )}
                  </span>
                </p>
              </li>

              <div
                className={`${styles.dropbox} ${
                  connect === true ? styles.active_dropbox : styles.dropbox
                }`}
              >
                <p>Contact</p>
                <p>Newsletter</p>
                <p>LinkedIn</p>
              </div>
            </div>
            <hr />
          </div>
          <div className={styles.right}>
            <h3>Login</h3>
            <button type="button">Sign Up</button>
          </div>
        </ul>
      </div>
    );
  }
  return null;
};

export default NavLink;
