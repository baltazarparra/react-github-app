import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className='App'>
      
        <section className='search'>
            <input type='search' placeholder='Digite o nome do usuário' />
        </section>
      
        <section className='user-info'>
          <img src='https://avatars2.githubusercontent.com/u/7395304?v=' alt='User' />
          <h1>
            <a href='http://github.com/baltazarparra'>Baltazar Parra</a>
          </h1>
        </section>
        
        <ul className='repos-info'>
            <li>- Repositórios: 132</li>
            <li>- Seguidores: 12</li>
            <li>- Seguindo: 47</li>
        </ul>
        
        <section className='actions'>
            <button>Ver repositórios</button>
            <button>Ver favoritos</button>
        </section>
        
        <section className='repos'>
            <h2>Repositórios</h2>
            <ul>
                <li>
                    <a href="https://github.com/baltazarparra">Nome do repositório</a>
                </li>
                <li>
                    <a href="https://github.com/baltazarparra">Nome do repositório</a>
                </li>
                <li>
                    <a href="https://github.com/baltazarparra">Nome do repositório</a>
                </li>
                <li>
                    <a href="https://github.com/baltazarparra">Nome do repositório</a>
                </li>
            </ul>
        </section>
        
        <section className='starred'>
            <h2>Favoritos</h2>
            <ul>
                <li>
                    <a href="https://github.com/baltazarparra">Nome do repositório</a>
                </li>
                <li>
                    <a href="https://github.com/baltazarparra">Nome do repositório</a>
                </li>
                <li>
                    <a href="https://github.com/baltazarparra">Nome do repositório</a>
                </li>
                <li>
                    <a href="https://github.com/baltazarparra">Nome do repositório</a>
                </li>
            </ul>
        </section>
        
      </main>
    );
  }
}

export default App;
