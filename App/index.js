import React from 'react';
import GiphySelect from 'react-giphy-select';
import 'react-giphy-select/dist/react-giphy-select.min.css';
import styles from './styles.css';

console.log(GiphySelect);

const App = () => (
  <div className={styles.app}>
    <h1 className={styles.appTitle}>
      Sandbox
      <sup className={styles.appAuthor}>@bashkos</sup>
    </h1>
    <GiphySelect />
  </div>
);

export default App;
