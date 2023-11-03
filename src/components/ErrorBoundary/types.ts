import { ErrorInfo, ReactNode } from 'react';

export type ErrorState = {
  error: Error | null;
  errorInfo: ErrorInfo | null;
};

export type ErrorProps = {
  children: ReactNode;
};
