import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MainScreen from "./containers/MainScreen";
import {Provider} from "react-redux";
import store from "./store/storeCreator";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Welcome to Health Monitor</h1>
                    </header>
                    <div className="App-intro">
                        <MainScreen/>
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
