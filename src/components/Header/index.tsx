import React from 'react';

type PropsType = {
  getData: (query: string) => void;
};

type StateType = {
  value: string;
  getData: (query: string) => void;
};

class Header extends React.Component<PropsType, StateType> {
  constructor(props: StateType) {
    super(props);
    this.state = { value: '', getData: this.props.getData };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(): void {
    const storageData = localStorage.getItem('formValue'); //TODO: remove localStorage
    this.setState({ value: storageData ? JSON.parse(storageData) : '' });
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    localStorage.setItem('formValue', JSON.stringify(this.state.value));
    this.props.getData(this.state.value);
  }

  render() {
    console.log(this.state.value);

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input type="submit" value="search" />
      </form>
    );
  }
}

export default Header;
