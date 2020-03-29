import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Contacts from './components/Contacts';
import Paginate from './components/Paginate';
import Typography from '@material-ui/core/Typography';
import './App.css';
import { Container } from '@material-ui/core';


class App extends Component {

  state = {
    contacts: []
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  }

  render() {
    return (
      <Container maxWidth="lg"> 
      <Typography variant="h2" className="title"> Contact List </Typography>
      <Contacts contacts={this.state.contacts} />
      <Paginate />
      </Container>
    );
  }
}


export default App;
