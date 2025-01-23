import React from "react";
import { StyleSheet } from "react-native";
import ErrorTemplate from "../ErrorTemplate";

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  reload?: VoidFunction;
  hasError?: boolean;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError || this.props.hasError) {
      return (
        this.props.fallback || (
          <ErrorTemplate
            reload={
              this.props.reload || (() => this.setState({ hasError: false }))
            }
          />
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
