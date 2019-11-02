import React from 'react';
import PropTypes from 'prop-types';
import History from './History';

const DeckOfHistory = (history) => {
  // console.log(history.history);
  let historyCard;
  if(history.length > 0) {
    console.log(history);
    historyCard = history.map(card => {
      console.log(card);
      return (
        <li key={card.id}>
          <History url={card.url}  method={card.method}/>
        </li>
      );
    });
  }

  return (
    <ul>
      {historyCard}
    </ul>
  );
};

DeckOfHistory.propTypes = {
  history: PropTypes.arrayOf(PropTypes.object)
};

export default DeckOfHistory;