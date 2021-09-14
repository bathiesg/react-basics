import React, { Component } from 'react';

export default class AjaxApis extends Component {

    state = {
        pokemons: []
    }

    componentDidMount() {
        const url = 'https://pokeapi.co/api/v2/pokemon';

        fetch(url)
            .then(res => res.json())
            .then(json => {
                console.log(1,json)
                json.results.forEach(element => {
                    fetch(element.url)
                        .then(response => response.json())
                        .then(response => {
                            let pokemon = {
                                id: response.id,
                                name: response.name,
                                avatar: response.sprites.front_default
                            }
                            
                            //push the current pokemon to the state pokemons array
                            let pokemons = [...this.state.pokemons, pokemon];

                            this.setState({pokemons})
                        })
                });
            })
    }

    showPokemons = () => {
        if(this.state.pokemons.length === 0 ) {
           return  'Loading...'
        } else {
            this.state.pokemons.map(pokemon => {
                return(
                <Pokemons
                    key={pokemon.id}
                    name={pokemon.name}
                    avatar={pokemon.avatar}
                />
                )
            })
        }
    }

    render() {

        return(
            <>
                <h3>Componentes de peticiones Ajax a Apis</h3>
                {this.state.pokemons.length === 0 ? 'Loading' : this.state.pokemons.map(pokemon => 
                <Pokemons
                    key={pokemon.id}
                    name={pokemon.name}
                    avatar={pokemon.avatar}
                />
            )}
            </>
        )
    }
}

function Pokemons(props){
    return(
        <figure>            
            <img src={props.avatar} alt={props.name}/>
            <figcaption>{props.name}</figcaption>
        </figure>
    )
}