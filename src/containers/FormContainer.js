import React, { Component } from 'react';
import Results from '../components/Results';
import Form from '../components/Form';
import routeCall from '../../services/APICalls';

export default class FormContainer extends Component {

  state = {
    url: '',
    method: '',
    userInput: '',
    results: null
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  }


  handleSubmit = (event) => {
    event.preventDefault();

    const { url, method, userInput } = this.state;
    routeCall(url, method, userInput)
      .then(res => {
        this.setState({ results: JSON.stringify(res, null, 2) });
      });

  }



  render() {
    return (
      <>
        <Form
          url={this.state.url}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Results text={this.state.results} />
      </>
    );
  }
}