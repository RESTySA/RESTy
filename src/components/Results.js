import React from 'react';
import PropTypes from 'prop-types';
import styles from './Results.css'

const Results = ({ text }) => {

  return (
    <div className={styles.Results}>
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