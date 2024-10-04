import React, { useState } from "react";
import styles from "./hospitalCard.module.css";

export default function HospitalCard() {
  return (
    <div className={styles.container}>
      <div className={styles.leftarrow}>
        &#10094;
      </div>
          <section class="slider-container">
              <button class="prev" onclick="slide(-1)">&#10094;</button>
              <div class="overview-container">
                  <div class="card">
                      <h2>Extensive Hospital Network</h2>
                      <img src="/src/assets/hospitalssec.png" alt="Hospital Network"  width="300" height="200"/>
                      <p>Connect with a broad network of hospitals and clinics across India.</p>
                  </div>
  
                  <div class="card">
                      <h2>Consultation Cost Comparison</h2>
                      <img src="/src/assets/docsec.png" alt="Consultation Cost Comparison" width="300" height="200"/>
                      <p>Compare consultation fees across different hospitals to find affordable options.</p>
                  </div>
  
                  <div class="card">
                      <h2>Insurance Policy Integration</h2>
                      <img src="/src/assets/insusec.png" alt="Insurance Integration" width="300" height="200"/>
                      <p>Filter hospitals based on your insurance coverage for a hassle-free experience.</p>
                  </div>
  
                  <div class="card">
                      <h2>Easy Appointment Scheduling</h2>
                      <img src="/src/assets/timeslot.png" alt="Appointment Scheduling" width="300" height="200"/>
                      <p>Book your consultation with ease, choosing from available slots at your preferred hospital.</p>
                  </div>
              </div>
              <button class="next" onclick="slide(1)">&#10095;</button>
          </section>
      <div className={styles.rightarrow}>&#10095;</div>
    </div>
  );
}
