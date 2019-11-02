import React from 'react';
import PropTypes from 'prop-types';
import History from './History';

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
    <>
      <h1>History</h1>
      <ul>
        {historyCard}
      </ul>
    </>
  );
};

DeckOfHistory.propTypes = {
  history: PropTypes.arrayOf(PropTypes.object)
};

export default DeckOfHistory;