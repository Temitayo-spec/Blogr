/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
import React from "react";
import styles from "../styles/default.module.css";
import Navbar from "../comps/Navbar"
import SectionOne from "../comps/SectionOne";
import SectionTwo from "../comps/SectionTwo";
import Footer from "../comps/Footer";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <Footer />
    </div>
  );
};

export default Home;
