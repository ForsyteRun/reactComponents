import React, { useEffect, useState } from 'react';
import { PropsType } from './types';

const Search = ({ setQuery }: PropsType) => {
  const [value, setValue] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const input = form.firstChild as HTMLInputElement;

    localStorage.setItem('formValue', JSON.stringify(input.value));

    setQuery(input.value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    const storageData = localStorage.getItem('formValue');

    if (storageData) {
      setValue(JSON.parse(storageData));
    }
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">search</button>
      </form>
      {/* <button onClick={handleError}>get error</button> */}
    </>
  );
};

// class Search extends React.Component<PropsType, StateType> {
//   state = { value: '', getData: this.props.getData };

//   // componentDidMount(): void {
//   //   const storageData = localStorage.getItem('formValue');

//   //   this.setState({ value: storageData ? JSON.parse(storageData) : '' });
//   //   this.props.getData(JSON.parse(storageData as string));
//   // }

//   handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     this.setState({ value: event.target.value });
//   };

//   handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     localStorage.setItem('formValue', JSON.stringify(this.state.value));
//     this.props.getData(this.state.value);
//   };

//   handleError = () => {
//     this.props.getData(null);
//   };

//   render() {
//     return (
//       <>
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             value={this.state.value}
//             onChange={this.handleChange}
//           />
//           <button type="submit">search</button>
//         </form>
//         <button onClick={this.handleError}>get error</button>
//       </>
//     );
//   }
// }

export default Search;
