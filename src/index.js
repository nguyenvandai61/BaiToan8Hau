import React from "react";
import {render} from "react-dom";
import "./table.css";
import Board from "./components/Board";
import registerServiceWorker from "./registerServiceWorker";


const App = () => {
    // componentDidMount
    return (
    <div>
        <Board/>
       
    </div>)
}

render(<App />, document.getElementById("root"));
registerServiceWorker();
