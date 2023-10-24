import React from 'react';
import './App.css';

type StateType = {
  count: number;
  next: string;
  previous: null;
  results: IItem[] | null;
};

interface IItem {
  name: string;
  url: string;
}

class App extends React.Component<NonNullable<unknown>, StateType> {
  constructor(props: NonNullable<unknown>) {
    super(props);
    this.state = {
      count: 2110,
      next: 'https://pokeapi.co/api/v2/item?offset=10&limit=10',
      previous: null,
      results: null,
    };
  }

  handleData = async () => {
    try {
      const response: Response = await fetch('https://pokeapi.co/api/v2/item');
      const data: StateType = await response.json();
      this.setState(data);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        Hello
        <button onClick={this.handleData}>Click me!</button>
        {console.log(this.state.results) as React.ReactNode}
      </div>
    );
  }
}

export default App;
