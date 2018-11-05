import React, {Component} from "react";
import {hot} from "react-hot-loader";
import Plot from "./Plot.js";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Plot />
            </div>
        );
    }
}

export default hot(module)(App);