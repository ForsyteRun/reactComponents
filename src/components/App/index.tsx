import React from 'react';
import ListItems from '../ListItem';
import Search from '../Search';
import s from './App.module.css';
import { StateType } from './types';
import { URL } from '../../constants';
import { IItem } from '../../types';

class App extends React.Component<NonNullable<unknown>, StateType> {
  constructor(props: NonNullable<unknown>) {
    super(props);
    this.state = {
      items: [],
      error: false,
      loading: false,
    };
  }

  getState = (
    loading: boolean = false,
    items: IItem[] = [],
    error: boolean = false
  ) => {
    this.setState({
      items,
      error,
      loading,
    });
  };

  getData = async (query: string | null) => {
    try {
      if (query === null) {
        throw new Error('Error');
      }

      this.getState(true);

      const response = await fetch(URL + (query ? query : 'nature'));

      if (response.ok) {
        const data: StateType = await response.json();

        this.getState(false, data.items);
      } else {
        throw new Error('Request failed');
      }
    } catch (error) {
      this.getState(false, [], true);
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
