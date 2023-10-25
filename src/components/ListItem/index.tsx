import React from 'react';
import s from './listItem.module.css';
import { IItem } from '../../types';

type PropsType = {
  results: IItem[] | null;
};
// type ListState = Pick<StateType, 'results'>;

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
          {this.state.results?.map(({ name, url }: IItem) => (
            <li key={url} className={s.item}>
              <div>{name}</div>
              <div>{url}</div>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default ListItems;
