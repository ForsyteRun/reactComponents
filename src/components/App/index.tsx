import React from 'react';
import { StateType } from '../../types';
import s from './App.module.css';
import ListItems from '../ListItem';
import Header from '../Header';
class App extends React.Component<NonNullable<unknown>, StateType> {
  state = {
    count: 2110,
    next: 'https://pokeapi.co/api/v2/item?offset=10&limit=10',
    previous: null,
    results: null,
  };

  componentDidMount = async () => {
    try {
      // const storageData = localStorage.getItem('data');
      const response: Response = await fetch('https://pokeapi.co/api/v2/item');
      const data: StateType = await response.json();
      this.setState(data);
    } catch (error) {
      throw new Error(`error: ${error}`);
    }
  };

  render() {
    return (
      <div className={s.container}>
        <Header />
        <ListItems results={this.state.results} />
      </div>
    );
  }
}

export default App;
