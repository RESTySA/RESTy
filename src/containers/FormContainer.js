import React, { Component } from 'react';
import Results from '../components/Results';
import Form from '../components/Form';
import routeCall from '../../services/APICalls';
import DeckOfHistory from '../components/DeckOfHistory';

export default class FormContainer extends Component {

  state = {
    url: '',
    method: '',
    userInput: '',
    results: null,
    historia: [],
    id: 0
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
        if(this.state.historia === []) {
          this.setState({ historia: { url: this.state.url, method: this.state.method, id: this.state.id } });
        }
        else {

          let tempHistory = this.state.historia;
          tempHistory.push({ url: this.state.url, method: this.state.method, id: this.state.id });

          this.setState({ historia: tempHistory });
        }
        this.setState(state => {
          return {
            id: state.id + 1
          };
        });
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
        <DeckOfHistory history={this.state.historia} />
      </>
    );
  }
}