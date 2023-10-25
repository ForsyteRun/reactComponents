import React from 'react';
import { StateType } from '../../types';
import s from './App.module.css';
import ListItems from '../ListItem';
import Search from '../Search';
class App extends React.Component<NonNullable<unknown>, StateType> {
  state = {
    count: 0,
    next: '',
    previous: null,
    results: null,
  };

  getData = async (query: string) => {
    const response: Response = await fetch(
      'https://swapi.dev/api/people' + (query ? `?search=${query}` : '')
    );
    const data: StateType = await response.json();
    this.setState(data);
  };

  render() {
    return (
      <div className={s.container}>
        <Search getData={this.getData} />
        <ListItems results={this.state.results} />
      </div>
    );
  }
}

export default App;
