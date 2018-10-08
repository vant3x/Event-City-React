import React, { Component } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

import './css/App.css';

class App extends Component {

  token = 'I6SI2ETPDSJGLYQXX4JH';
  ordenar = 'date';

  state = {
    categorias: [],
    eventos: []
  }

  componentDidMount() {
    this.obtenerCategorias();
  }

  obtenerCategorias = async () => {
    let url = `https://www.eventbriteapi.com/v3/categories/?&token=${this.token}&locale=es_ES`;

    await fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(categorias => {
          this.setState({
            categorias: categorias.categories
          })
      })
  }

  obtenerEventos = async (busqueda) => {
   let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=${this.ordenar}&token=${this.token}&locale=es_ES`;
    
   await fetch(url)
   .then(respuesta => {
     return respuesta.json();
   })
   .then(eventos => {
     this.setState({
       eventos: eventos.events
     })
   })
  }

  render() {
    return (
      <div className="App">
        <Header/>
        
        <div className="uk-container">
            <Formulario 
              categorias={this.state.categorias}
              obtenerEventos={this.obtenerEventos}
            />
        </div>
 
      </div>
    );
  }
}

export default App;
