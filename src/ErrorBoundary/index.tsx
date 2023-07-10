import { Component, ErrorInfo, ReactElement } from "react";

interface IProp {
  children: ReactElement;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<IProp, State> {
  public state: State = {
    hasError: false,
  };

  public static getStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <>
          <div
            style={{
              width: "50%",
              margin: "5em auto",
              textAlign: "center",
              color: "#000",
            }}
          >
            <p style={{ fontSize: "22px", fontWeight: "bold" }}>Oops...</p>
            <p style={{ fontSize: "22px", fontWeight: "bold" }}>
              Something went wrong, Please refresh or check your internet
              connection
            </p>
          </div>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
