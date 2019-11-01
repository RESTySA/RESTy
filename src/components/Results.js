import React from 'react';
import PropTypes from 'prop-types';

const Results = ({ text }) => {

  return (
    <div>
      <pre>
        {text}
      </pre>
    </div>
  );
};

Results.propTypes = {
  text: PropTypes.string
};

export default Results;