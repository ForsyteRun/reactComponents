import React from 'react';
import { StateType, IItem } from '../../types';

type PropsType = Pick<StateType, 'results'>;

class ListItems extends React.Component<PropsType, PropsType> {
  constructor(props: PropsType) {
    super(props);

    this.state = {
      results: [],
    };
  }

  componentDidUpdate(prevProps: PropsType) {
    if (prevProps.results !== this.props.results) {
      this.setState({
        results: this.props.results,
      });
    }
  }

  render() {
    return (
      <>
        <ul>
          {this.state.results?.map((el: IItem) => (
            <li key={el.url}>
              <div>{el.name}</div>
              <div>{el.url}</div>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default ListItems;
