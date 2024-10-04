import React, { useState } from "react";
import styles from "./hospitalCard.module.css";

export default function HospitalCard() {
  return (
    <section className={styles.section}>
      <div className={styles.hero_section}>
        Unlock a Healthier Future with the World's Largest Health Insurance Scheme, 
        Protecting Vulnerable Families with Comprehensive Financial Support for Quality
        Healthcare!
      </div>
    </section>
  );
}
