/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable quotes */
/* eslint-disable arrow-body-style */
import styles from "../styles/section-two.module.css";

const SectionTwo = () => {
  if (typeof window !== "undefined") {
    return (
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <section className={styles.top}>
            <img src="/images/illustration-phones.svg" alt="" />
            <div className={styles.state_text}>
              <h1>State of the Art Infrastructure</h1>
              <p>
                With reliability and speed in mind, worldwide data centers
                provide the backbone for ultra-fast connectivity. This ensures
                your site will load instantly, no matter where your readers are,
                keeping your site competitive.
              </p>
            </div>
          </section>
          <section className={styles.bottom}>
            <div className={styles.laptop}>
              {window.innerWidth < 600 ? (
                <img src="/images/illustration-laptop-mobile.svg" alt="" />
              ) : (
                <img src="/images/illustration-laptop-desktop.svg" alt="" />
              )}
            </div>
            <div className={styles.info}>
              <div className={styles.info_ctn}>
                <h1>Free, open, simple</h1>
                <p>
                  Blogr is a free and open source application backed by a large
                  community of helpful developers. It supports features such as
                  code syntax highlighting, RSS feeds, social media integration,
                  third-party commenting tools, and works seamlessly with Google
                  Analytics. The architecture is clean and is relatively easy to
                  learn.
                </p>
              </div>
              <div className={styles.info_ctn}>
                <h1>Powerful tooling</h1>
                <p>
                  Batteries included. We built a simple and straightforward CLI
                  tool that makes customization and deployment a breeze, but
                  capable of producing even the most complicated sites.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
  return null;
};

export default SectionTwo;
