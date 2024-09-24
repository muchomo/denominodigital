import React from 'react';

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.companyName}>Denomino.Digital</h1>

      <section style={styles.section}>
        <h2>About Our Brands</h2>
        <p>
          We provide digital menus and IT solutions tailored to various retail business types.
          Whether you're a restaurant, a cannabis dispensary, or a retail store, we create custom
          digital solutions to streamline your operations.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Contact Us</h2>
        <p>
          Have questions? Reach us at: <strong>(505) 600-0885</strong>
        </p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '20px',
  },
  companyName: {
    fontSize: '2.5rem',
    height: '100px',
    margin: '20px 0',
  },
  section: {
    width: '60%',
    height:'200px',
    margin: 'auto',
    display:'block'
    
  },
};

export default HomePage;
