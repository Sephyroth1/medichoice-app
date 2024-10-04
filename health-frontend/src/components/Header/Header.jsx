import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.container}>
      <img
        src="/src/assets/medichoicepng.png"
        alt="medichoice-logo"
        width="200"
        height="100"
        className={styles.imgContainer}
      />
      <div className={styles.buttonlink}>
        <div className={styles.links}>
          <a href="#" className={styles.link} id="link1">
            Home
          </a>
          <a href="#" className={styles.link} id="link2">
            About
          </a>
          <a href="#" className={styles.link} id="link3">
            BookSlot
          </a>
          <a href="#" className={styles.link} id="link4">
            Review
          </a>
          <a href="#" className={styles.link} id="link5">
            Contact
          </a>
          <a href="#" className={styles.link} id="link6">
            Queries
          </a>
          <a href="#" className={styles.link} id="link7">
            Help
          </a>
        </div>
        <Link to="/login">login</Link>
        <Link to="/signup">signup</Link>
      </div>
    </header>
  );
}
