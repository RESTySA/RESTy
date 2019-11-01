import React, { Component } from 'react';
import Buttons from '../components/Buttons';
import Results from '../components/Results';
import UserInput from '../components/UserInput';
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
      const { url, handleRouteChange, handleSubmit, handleUserInput, handleURLInput } = this.props;
      return (
        <form onSubmit={handleSubmit}>
          <input type="string" value={url} placeholder="URL">
          </input>
        </form>
      );
    }

}
