import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import GiphySelectPage from '~pages/GiphySelectPage'; // eslint-disable-line import/no-unresolved, import/extensions
import styles from './styles.css';

const App = () => (
  <Router>
    <div className={styles.app}>
      <h1 className={styles.appTitle}>
        Sandbox
        <sup className={styles.appAuthor}>@bashkos</sup>
      </h1>
      <ul className={styles.menu}>
        <li className={styles.menuItem}><Link to="/giphy-select">GiphySelect</Link></li>
      </ul>
      <Route path="/giphy-select" component={GiphySelectPage} />
    </div>
  </Router>
);

export default App;
