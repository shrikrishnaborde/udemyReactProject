import react, { Component } from 'react';

class ErrorBounday extends Component {
    state = {
        hasError : false,
        errorMessage : ''
    };

    componentDidCatch = (error,info) => {
        this.setState({
            hasError : true,
            errorMessage : error
        });
    }

    render() {
        if(this.state.hasError) {
        return (<h5>{ this.state.errorMessage }</h5>)
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBounday;