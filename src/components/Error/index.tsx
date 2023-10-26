import React, { ErrorInfo } from 'react';
import { ErrorProps, ErrorState } from './types';
import s from './error.module.css';
class ErrorBoundary extends React.Component<ErrorProps, ErrorState> {
  constructor(props: ErrorProps) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  handleReset = () => {
    this.setState({ error: null, errorInfo: null });
  };

  render() {
    if (this.state.errorInfo) {
      return (
        <div className={s.container}>
          <h2 className={s.title}>Something went wrong.</h2>
          <button onClick={this.handleReset}>back</button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
