import React from 'react';
import { StateType, IItem } from '../../types';
import s from './listItem.module.css';

type PropsType = Pick<StateType, 'results'>;

class ListItems extends React.Component<PropsType, PropsType> {
  state = {
    results: [],
  };

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
        <ul className={s.list}>
          {this.state.results?.map((el: IItem) => (
            <li key={el.url} className={s.item}>
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
