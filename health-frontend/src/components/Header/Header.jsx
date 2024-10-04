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
          <Link to="/" className={styles.link} id="link1">
            Home
          </Link>
          <Link to="/login" className={styles.link}>
            Login
          </Link>
          <Link to="/signup" className={styles.link}>
            Signup
          </Link>
        </div>
      </div>
    </header>
  );
}
