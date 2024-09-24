import React from 'react';
import styles from '../app/page.module.css'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.companyName}>Denomino.Digital</h1>

      <section className={styles.section}>
        <h2>About Our Brands</h2>
        <p>
          We provide digital menus and IT solutions tailored to various retail business types.
          Whether you&apos;re a restaurant, a cannabis dispensary, or a retail store, we create custom
          digital solutions to streamline your operations.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Contact Us</h2>
        <p>
          Have questions? Reach us at: <strong>505-600-0885</strong>
        </p>
      </section>
    </div>
  );
};

export default HomePage;
