import React from 'react';

type StateType = {
  value: string;
};

class Header extends React.Component<NonNullable<unknown>, StateType> {
  constructor(props: NonNullable<unknown>) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(): void {
    const storageData = localStorage.getItem('formValue');
    this.setState({ value: JSON.parse(storageData ? storageData : '') });
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    localStorage.setItem('formValue', JSON.stringify(this.state.value));
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
