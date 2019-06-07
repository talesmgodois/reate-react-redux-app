import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from './actions';
import './App.css';

class App extends Component {
    state = {
        inputValue: ''
    };

    inputChange = event => {
        this.setState({
            inputValue: event.target.value
        });
    };

    render() {
        const { newValue, clickButton } = this.props;
        const { inputValue } = this.state;
        return (
            <div
                className="App"
                type="text"
                value={inputValue}
                style={{ paddingTop: '10px' }}
                onChange={this.inputChange}
            >
                <input type="text" />
                <button onClick={() => clickButton(inputValue)}>
                    Click me!
                </button>
                <h1>{newValue}</h1>
            </div>
        );
    }
}

const mapStateToProps = store => ({
    newValue: store.clickState.newValue
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ clickButton }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
