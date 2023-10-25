import React from 'react';
import { IItem } from '../../types';
import ListItems from '../ListItem';
import Search from '../Search';
import s from './App.module.css';

type StateType = {
  items: IItem[];
  error: boolean;
  loading: boolean;
};

class App extends React.Component<NonNullable<unknown>, StateType> {
  constructor(props: NonNullable<unknown>) {
    super(props);
    this.state = {
      items: [],
      error: false,
      loading: false,
    };
  }

  getData = async (query: string) => {
    try {
      this.setState({
        loading: true,
      });

      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${
          query ? query : 'nature'
        }`
      );

      if (response.ok) {
        const data: StateType = await response.json();

        this.setState({
          items: data.items,
          error: false,
          loading: false,
        });
      } else {
        throw new Error('Request failed');
      }
    } catch (error) {
      this.setState({
        items: [],
        error: false,
        loading: false,
      });
    }
  };

  render() {
    if (this.state.error) {
      throw new Error('I crashed!');
    }

    return (
      <div className={s.container}>
        <Search getData={this.getData} />
        {this.state.loading ? (
          <div className="lds-dual-ring"></div>
        ) : (
          <ListItems items={this.state.items} />
        )}
      </div>
    );
  }
}

export default App;
