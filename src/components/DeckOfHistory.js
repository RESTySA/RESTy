import React from 'react';
import PropTypes from 'prop-types';
import History from './History';
import styles from './DeckOfHistory.css'

const DeckOfHistory = ({ history }) => {
  let historyCard;
  if(history.length > 0) {
    historyCard = history.map(card => {
      return (
        <li key={card.id}>
          <History url={card.url} method={card.method} />
        </li>
      );
    });
  }

  return (
    <div className={styles.DeckOfHistory}>
      <h3>History</h3>
      <ul>
        {historyCard}
      </ul>
    </div>
  );
};

DeckOfHistory.propTypes = {
  history: PropTypes.arrayOf(PropTypes.object)
};

export default DeckOfHistory;