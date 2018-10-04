import React, { Component } from 'react';
import Header from './components/Header';

import './css/App.css';

class App extends Component {

  componentDidMount() {
    this.obtenerCategorias();
  }

  obtenerCategorias = async () => {
    let url = `https://www.eventbriteapi.com/v3/categories/?token=I6SI2ETPDSJGLYQXX4JH&locale=es_ES`
    
    await fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(categorias => {
        console.log(categorias.categories)
      })
  }

  render() {
    return (
      <div className="App">
        <Header/>
      </div>
    );
  }
}

export default App;
