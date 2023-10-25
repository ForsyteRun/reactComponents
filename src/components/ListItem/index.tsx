import React from 'react';
import s from './listItem.module.css';
import { IItem } from '../../types';

type PropsType = {
  items: IItem[] | null;
};

class ListItems extends React.Component<PropsType, PropsType> {
  state = {
    items: [],
  };

  componentDidUpdate(prevProps: PropsType) {
    if (prevProps.items !== this.props.items) {
      this.setState({
        items: this.props.items,
      });
    }
  }

  render() {
    return (
      <>
        <ul className={s.list}>
          {this.state.items?.map(({ id, volumeInfo }: IItem) => (
            <li key={id} className={s.item}>
              <div>{volumeInfo.authors}</div>
              <img
                src={volumeInfo.imageLinks.thumbnail}
                alt={volumeInfo.title}
              />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default ListItems;
