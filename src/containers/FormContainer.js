import React, { Component } from 'react';
// import Results from '../components/Results';
import Form from '../components/Form';
import { routeCall } from '../../services/APICalls';

export default class FormContainer extends Component {

    state = {
      url: '',
      method: '',
      userInput: ''
    }

    componentDidUpdate() {
      event.preventDefault();
    }

    handleRouteChange = ({ target }) => {
      this.setState({ method: target.value });
    }
    handleUserInput = ({ target }) => {
      this.setState({ userInput: target.value });
    }
    handleURLInput = ({ target }) => {
      this.setState({ url: target.value });
    }
    handleSubmit= ({ target }) => {
      event.preventDefault();
      console.log(this.state);
    }
    


    render() {
      return (
        <>
          <Form
            url={this.state.url}
            handleRouteChange={this.handleRouteChange}
            handleSubmit={this.handleSubmit}
            handleUserInput={this.handleUserInput}
            handleURLInput={this.handleURLInput}
          />
        </>
      );
    }
}