import React from 'react';
import { IItem } from '../../types';
import ListItems from '../ListItem';
import Search from '../Search';
import s from './App.module.css';

type StateType = {
  items: IItem[];
  error: boolean;
};

class App extends React.Component<NonNullable<unknown>, StateType> {
  constructor(props: NonNullable<unknown>) {
    super(props);
    this.state = {
      items: [],
      error: false,
    };
  }

  getData = async (query: string) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query ? query : 'war'}`
      );

      if (response.ok) {
        const data = await response.json();

        this.setState({
          items: data.items,
          error: false,
        });
      } else {
        throw new Error('Request failed');
      }
    } catch (error) {
      this.setState({
        items: [],
        error: true,
      });
    }
  };

  render() {
    if (this.state.error) {
      throw new Error('I crashed!');
    }
    console.log(this.state);
    return (
      <div className={s.container}>
        <Search getData={this.getData} />
        <ListItems items={this.state.items} />
      </div>
    );
  }
}

export default App;
