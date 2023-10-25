import React from 'react';

type StateType = {
  value: string;
};

class Header extends React.Component<NonNullable<unknown>, StateType> {
  state = { value: '' };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Header;
