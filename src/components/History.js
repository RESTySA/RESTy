import React from 'react';
import PropTypes from 'prop-types';

const History = ({ method, url }) => {
  return (
    <>
      <h4>{method.toUpperCase()}</h4>
      <span>{url}</span>
    </>
  );
};

History.propTypes = {
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default History;