import React from 'react';
import styles from './styles.css';

const App = () => (
  <div className={styles.app}>
    <h1 className={styles.appTitle}>
      Sandbox
      <sup className={styles.appAuthor}>@bashkos</sup>
    </h1>
  </div>
);

export default App;
