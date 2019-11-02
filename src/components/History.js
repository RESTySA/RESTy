import React from 'react';
import PropTypes from 'prop-types';

const History = ({ method, url }) => {
  return (
    <li>
      <h2>{method.toUpperCase()}</h2>
      <span>{url}</span>
    </li>
  );
};

History.propTypes = {
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default History;