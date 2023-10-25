import React from 'react';
import { StateType } from '../../types';
import s from './App.module.css';
import ListItems from '../ListItem';
import Search from '../Search';
class App extends React.Component<NonNullable<unknown>, StateType> {
  constructor(props: NonNullable<unknown>) {
    super(props);
    this.state = {
      count: 0,
      next: '',
      previous: null,
      results: null,
      error: false,
    };
    this.getData = this.getData.bind(this);
  }

  async getData(query: string) {
    try {
      const response: Response = await fetch(
        'https://swapi.dev/api/peopleg' + (query ? `?search=${query}` : '')
      );
      const data: StateType = await response.json();
      this.setState(data);
    } catch (error) {
      this.setState({
        count: 0,
        next: '',
        previous: null,
        results: null,
        error: true,
      });
    }
  }

  render() {
    if (this.state.error) {
      throw new Error('I crashed!');
    }
    return (
      <div className={s.container}>
        <Search getData={this.getData} />
        <ListItems results={this.state.results} />
      </div>
    );
  }
}

export default App;
