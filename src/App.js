import React, { Component } from 'react';
import AppContent from './components/app-content';
import './App.css';

class App extends Component {
    constructor () {
        super()
        this.state = {
            userinfo: null,
            repos: [],
            starred: [],
            isFetching: false
        }
    }

    handleSearch (e) {
        const value = e.target.value;
        const keyCode = e.which || e.keyCode;
        const ENTER = 13;

        if (keyCode === ENTER) {
            this.setState({isFetching: true})
            var ajax = new XMLHttpRequest();
            ajax.open('GET', `https://api.github.com/users/${value}`);
            ajax.send();
            ajax.addEventListener('readystatechange', function() {
              if(isRequestOk() ) {
                try {
                  var user = JSON.parse(ajax.responseText);
                  this.setState({
                      userinfo: {
                          username: user.name,
                          photo: user.avatar_url,
                          login: user.login,
                          repos: user.public_repos,
                          followers: user.followers,
                          following: user.following
                      },
                      repos: [],
                      starred: []
                  })
                  this.setState({isFetching: false})
                } catch(e) {
                  console.log(e);
                  this.setState({isFetching: false})
                }
              }
            }.bind(this));
            function isRequestOk() {
              return ajax.readyState === 4 && ajax.status === 200;
            }
        }
    }
    
    handleClick (type) {
        return (e) => {
            var ajax = new XMLHttpRequest();
            ajax.open('GET', `https://api.github.com/users/${this.state.userinfo.login}/${type}`);
            ajax.send();
            ajax.addEventListener('readystatechange', function() {
                if(isRequestOk() ) {
                    try {
                        var repositories = JSON.parse(ajax.responseText);
                        this.setState({ 
                            [type]:
                            repositories.map((item) => {
                                return {
                                    name: item.name,
                                    link: item.html_url
                                }
                            })
                        })
                    } catch(e) {
                        console.log(e);
                    }
                }
            }.bind(this));
            function isRequestOk() {
                return ajax.readyState === 4 && ajax.status === 200;
            }
        }
    }
        
    render() {
    return <AppContent 
            // userinfo={this.state.userinfo}
            // repos={this.state.repos}
            // starred={this.state.starred}
            // isFetching={this.state.isFetching}
            
            // CHUPA ES5
            {...this.state}
            handleSearch={(e) => this.handleSearch(e)}
            getRepos={this.handleClick('repos')}
            getStarred={this.handleClick('starred')}/>
    }
}

export default App;