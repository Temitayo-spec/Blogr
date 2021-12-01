/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable quotes */
import styles from "../styles/section-one.module.css";

const SectionOne = () => {
  if (typeof window !== "undefined") {
    return (
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <header className={styles.header}>
            <h1>Designed for the future</h1>
          </header>
          <main className={styles.main}>
            <div className={styles.laptop}>
              {window.innerWidth < 600 ? (
                <img src="/images/illustration-editor-mobile.svg" alt="" />
              ) : (
                <img src="/images/illustration-editor-desktop.svg" alt="" />
              )}
            </div>
            <div className={styles.lhs}>
              <div className={styles.design_info}>
                <h1>Introducing an extensible editor</h1>
                <p>
                  Blogr features an exceedingly intuitive interface which lets
                  you focus on one thing: creating content. The editor supports
                  management of multiple blogs and allows easy manipulation of
                  embeds such as images, videos, and Markdown. Extensibility
                  with plugins and themes provide easy ways to add functionality
                  or change the looks of a blog.
                </p>
              </div>
              <div className={styles.design_info}>
                <h1>Robust content management</h1>
                <p>
                  Flexible content management enables users to easily move
                  through posts. Increase the usability of your blog by adding
                  customized categories, sections, format, or flow. With this
                  functionality, you’re in full control.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
  return null;
};

export default SectionOne;
