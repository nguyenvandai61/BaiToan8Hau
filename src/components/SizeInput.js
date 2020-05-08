import React from 'react';

export default class SizeInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <form>
                    <input type="number" name="size" placeholder="Nhập vào 1 số" onChange={this.props.changeSize}></input>
                    <button type="button" onClick={this.props.getState}>Next Model</button>
                </form>
            </div>
        )
    }
}