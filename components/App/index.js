import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import GiphySelectPage from '~pages/GiphySelectPage'; // eslint-disable-line import/no-unresolved, import/extensions
import EmojiSelectPage from '~pages/EmojiSelectPage'; // eslint-disable-line import/no-unresolved, import/extensions
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
        <li className={styles.menuItem}><Link to="/emoji-select">EmojiSelect</Link></li>
      </ul>
      <Route path="/giphy-select" component={GiphySelectPage} />
      <Route path="/emoji-select" component={EmojiSelectPage} />
    </div>
  </Router>
);

export default App;
