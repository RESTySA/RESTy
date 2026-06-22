import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';


export default class Form extends Component {

  static propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,

  }

  render() {
    const { handleSubmit, handleChange } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <input type="string" name="url" placeholder="URL" onChange={handleChange} />
        <div className={styles.Buttons}>
          <input onChange={handleChange} id="get" type="radio" name="method" value="get" /><label htmlFor="get">GET</label>
          <input onChange={handleChange} id="post" type="radio" name="method" value="post" /><label htmlFor="post">POST</label>
          <input onChange={handleChange} id="put" type="radio" name="method" value="put" /><label htmlFor="put">PUT</label>
          <input onChange={handleChange} id="delete" type="radio" name="method" value="delete" /><label htmlFor="delete">DELETE</label>
          <button onClick={handleSubmit}>Go!</button>
        </div>
        <textarea onChange={handleChange} name="userInput" placeholder="Raw JSON Body" rows={10} cols={70} />
      </form>
    );
  }

}
