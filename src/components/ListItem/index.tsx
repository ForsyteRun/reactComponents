import React from 'react';
import s from './listItem.module.css';
import { IItem, noImgTemplate } from '../../types';

type PropsType = {
  items: IItem[] | null;
};

class ListItems extends React.Component<PropsType, PropsType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount(): void {
    this.setState({
      items: this.props.items,
    });
  }

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
        <ul>
          {this.state.items?.map(({ id, volumeInfo }: IItem) => (
            <li key={id} className={s.item}>
              <img
                src={volumeInfo?.imageLinks?.thumbnail || noImgTemplate.noImg}
                alt={volumeInfo.title}
              />
              <div className={s.content}>
                <div>
                  <span className={s.title}>authors:</span> {volumeInfo.authors}
                </div>
                <div>
                  <span className={s.title}>language:</span>{' '}
                  {volumeInfo.language}
                </div>
                <div>
                  <span className={s.title}>pageCount:</span>{' '}
                  {volumeInfo.pageCount}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default ListItems;
