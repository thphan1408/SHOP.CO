import { Component, ErrorInfo, ReactNode } from "react";
import ServerInternalPage from "../../pages/serverInternalPage";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public componentDidCatch(_error: Error, _errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
  }

  public render() {
    if (this.state.hasError) {
      return (
        <>
          <ServerInternalPage />
        </>
      );
    }

    return this.props.children;
  }
}
