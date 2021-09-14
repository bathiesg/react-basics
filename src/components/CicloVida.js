import React, { Component } from 'react';

class Time extends Component {
  
    componentWillUnmount() {
        console.log(3,'El componente esta eliminado del DOM');
    }
    render() {
        return(
            <>
            <h3>{this.props.time}</h3>
            </>
        )
    }
}


export default class CicloVida extends Component {
    constructor(props){
        super(props);

        this.state = {
            time: new Date().toLocaleTimeString(),
            visible: false
        }

        this.temporizator = null;

        console.log(0, 'El componente se iniciliza pero aun no esta en el DOM');      
     
    }

    componentDidMount(){
        console.log(1,'El componente ya esta disponible en el DOM');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(2, 'El componente esta actualizado');
        console.log('props de antes: ', prevProps);
        console.log('El stado anterior: ', prevState);
    }

    tictac = () => {
       this.temporizator = setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString()
            })
            
           
        }, 1000);
    }

    start = () => {
        this.tictac();
        this.setState({
            visible: true
        })
    }

    stop = () => {
        clearInterval(this.temporizator);
        this.setState({
            visible: false
        })
    }


    render(){
        console.log(4, 'El componente se monta/actualiza en el DOM');
        return(
            <>
                <h2>Componente Ciclo de vida</h2>
                {this.state.visible && <Time time={this.state.time} /> }
                
                <button onClick={this.start}>start</button>
                <button onClick={this.stop}>stop</button>
            </>
        )
    }
    
}