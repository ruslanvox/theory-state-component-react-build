import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: this.props.years
        };

    }

    nextYear = () => {
        this.setState((state) => {
            return ({
                years: ++state.years
            })

        })
    }

    previousYear = () => {
        this.setState((state) => {
            return ({
                years: --state.years
            })
        })
    }

    render() {
        return (<>
            <h1>My name is {this.props.name}, Surname {this.props.surname}, Age {this.state.years} </h1>
            <a href={this.props.link}>My Profile</a>
            <button onClick={this.nextYear}>++</button>
            <button onClick={this.previousYear}>--</button>

        </>)
    }

}

let All = () => {
    return (<>
        <WhoAmI name="Ruslan" surname="Nemtsev" link="https://www.google.com" years="15"/>
        <WhoAmI name="Ruslan" surname="Nemtsev" link="https://www.google.com" years="15"/>
        <WhoAmI name="Ruslan" surname="Nemtsev" link="https://www.google.com" years="15"/>
        <WhoAmI name="Ruslan" surname="Nemtsev" link="https://www.google.com" years="15"/>
    </>)
}

ReactDOM.render(
    <All/>,
    document.getElementById('root')
);

