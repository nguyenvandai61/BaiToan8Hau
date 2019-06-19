import React from "react";
import {render} from "react-dom";
import "./table.css";
import Board from "./Board";
import registerServiceWorker from "./registerServiceWorker";


const App = () => {
    // componentDidMount
    return (
    <div>
        <Board size={2}/>
        <input name="size" placeholder="Nhập vào 1 số"></input>
    </div>)
}

render(<App />, document.getElementById("root"));
registerServiceWorker();
