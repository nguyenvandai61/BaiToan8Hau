import React from 'react';

export default class SizeInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 8,
        }
        this.applySize = this.applySize.bind(this);
        this.onChangeSize = this.onChangeSize.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    onChangeSize(event) {
        event.preventDefault();
        const value = parseInt(event.target.value);
        this.setState({ size: value });
        console.log(this.state);
    };
    applySize() {
        const size = this.state.size;
        this.props.setSizeInput(size);
    }

    handleClick(event) {
        event.preventDefault();
        const value = parseInt(event.target.value);
        this.setState({ size: value });
        this.applySize();
    }

    render() {
        return (
            <div>
                <form>
                    <input type="number" name="size" placeholder="Nhập vào 1 số" onChange={this.onChangeSize}></input>
                    <button type="button" onClick={this.nextModel}>Next Model</button>
                    <button type="submit" onClick={this.handleClick}>Submit</button>
                </form>
            </div>
        )
    }
}