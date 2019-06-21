import React from 'react';
import "./table.css";
import Game from './Game';
import SizeInput from './SizeInput';

class Board extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            size: 2
        }
        this.setSizeInput = this.setSizeInput.bind(this);
    }
    componentDidMount(){
    }

    setSizeInput(size) {
        console.log(size);
        this.setState({size: size});
    }

    render() {
        const game = new Game(this.state.size);
        return (
        <div>
            <table id="table">
                <tbody>
                    {game.board.map((rank, i) => (
                        <tr key={i}>
                            {rank.map((piece, j) => <td key={j}>C</td>)}
                        </tr>
                    ))}
                </tbody>

            </table>
            <SizeInput setSizeInput={this.setSizeInput}/>
        </div>
        )
    }
}

export default Board;

