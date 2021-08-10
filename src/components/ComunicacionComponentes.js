import React, { Component } from 'react';


export default class Padre extends Component {
    state = {
        counter: 0
    }

    increaseCounter = (e) => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        return (
            <>
                <h2>Comunicacion entre componentes</h2>
                <h3>Contador: {this.state.counter} </h3>
                <Hijo 
                    increaseCounter = {this.increaseCounter} 
                    mensaje = "De Padre a Hijo"
                />
            </>
        );
    } 
}


function Hijo(props) {
    return(
    <>
        <h4>{props.mensaje}</h4>
        <button onClick={props.increaseCounter}> +</button>
    </>
    )
}
