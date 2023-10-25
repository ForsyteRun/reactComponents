import React from 'react';
import { StateType } from '../../types';
import s from './App.module.css';
import ListItems from '../ListItem';
import Header from '../Header';
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

  componentDidMount = async () => {
    try {
      const storageData = JSON.parse(
        localStorage.getItem('formValue') as string
      );

      this.getData(storageData);
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
