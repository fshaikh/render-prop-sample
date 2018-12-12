import React from 'react';

export default class AppVisibilityManager extends React.Component{
    constructor(props) {
        super(props);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
        this.state = {
            isActive: true
        };
    }

    componentDidMount() {
        document.addEventListener("visibilitychange", () => this.handleVisibilityChange(document.hidden));
        window.addEventListener('blur', () => this.handleVisibilityChange(true))
        window.addEventListener('focus', () => this.handleVisibilityChange(false))
    }

    render(){
        return (
            <React.Fragment>
                {this.props.render(this.state.isActive)}
            </React.Fragment>
        )
    }

    handleVisibilityChange(hidden){
        this.setState({isActive: !hidden});
    }
}