import React, { Component } from 'react';
import PropTypes from 'prop-types';


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
          <input onChange={handleChange} type="radio" name="method" value="get" /> <span>GET</span>
          <input onChange={handleChange} type="radio" name="method" value="post" /> <span>POST</span>
          <input onChange={handleChange} type="radio" name="method" value="put" /> <span>PUT</span>
          <input onChange={handleChange} type="radio" name="method" value="delete" /> <span>DELETE</span>
          <textarea onChange={handleChange} name="userInput" placeholder="Raw JSON Body" rows={10} cols={70} />
          <button onClick={handleSubmit}>Go!</button>
        </form>
      );
    }

}
