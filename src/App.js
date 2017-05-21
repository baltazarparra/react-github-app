import React, { Component } from 'react';
import Search from './components/search';
import UserInfo from './components/user-info';
import Actions from './components/actions';
import Repos from './components/repos';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className='container App'>
      
          <Search />
          <UserInfo />
          <Actions />
          <Repos 
            className='repos'
            title='Repositórios'
            repos={[{
                name: 'Nome do repositório',
                link: 'http://github.com/users/baltazarparra'
            }]}
          />
          
          <Repos 
            className='repos'
            title='Favoritos'
            repos={[{
                name: 'Nome do repositório',
                link: 'http://github.com/users/baltazarparra'
            }]}
          />

      </main>
    );
  }
}

export default App;
