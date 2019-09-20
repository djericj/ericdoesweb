import React from "react";
import { toast } from "react-toastify";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error: error };
  }
  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    //logErrorToMyService(error, info);
    this.setState({
      hasError: true,
      error: error,
      info: info
    });
  }
  render() {
    if (this.state.hasError) {
      return <h1>Error</h1>;
      // You can render any custom fallback UI
      //   return toast.error(this.state.error.toString(), {
      //     position: toast.POSITION.BOTTOM_LEFT,
      //     autoClose: false,
      //     className: "bg-danger",
      //     bodyClassName: ""
      //   });
    }
    return this.props.children;
  }
}
