import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Form extends Component {

    static propTypes = {
      url: PropTypes.string.isRequired,
      handleRouteChange: PropTypes.func.isRequired,
      handleSubmit: PropTypes.func.isRequired,
      handleUserInput: PropTypes.func.isRequired,
      handleURLInput: PropTypes.func.isRequired
    }

    render() {
      const { handleRouteChange, handleSubmit, handleUserInput, handleURLInput } = this.props;
      return (
        <form onSubmit={handleSubmit}>
          <input type="string" placeholder="URL" onChange={handleURLInput} />
          <input onChange={handleRouteChange} type="radio" name="method" value="get" /> <span>GET</span>
          <input onChange={handleRouteChange} type="radio" name="method" value="post" /> <span>POST</span>
          <input onChange={handleRouteChange} type="radio" name="method" value="put" /> <span>PUT</span>
          <input onChange={handleRouteChange} type="radio" name="method" value="delete" /> <span>DELETE</span>
          <textarea onChange={handleUserInput} placeholder="Raw JSON Body" rows={10} cols={70} />
          <button onClick={handleSubmit}>Go!</button>
        </form>
      );
    }

}
