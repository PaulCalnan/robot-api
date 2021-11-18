import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
// import { robots } from './robots';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      bills: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ bills: users}));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const filteredBills = this.state.bills.filter(bills =>{
      return bills.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    if (this.state.bills.length === 0) {
      return <h1 className='tc f1'>Loading</h1>
    } else {
      return (
        <div className='tc'>
          <h1 className='f1'>Bill Murrays</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <CardList bills={filteredBills}/>
        </div>
      );
    }
  }
}

export default App;
