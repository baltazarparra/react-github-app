import React from 'react'
import Search from './search';
import UserInfo from './user-info';
import Actions from './actions';
import Repos from './repos';
import PropTypes from 'prop-types';

const AppContent = ({ userinfo, repos, starred, handleSearch, getRepos, getStarred }) => (
    <main className='container App'>
    
        <Search handleSearch={handleSearch}/>
        {!!userinfo && <UserInfo userinfo={userinfo} />}
        {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred}/>}
        
        {!!repos.length &&
            <Repos 
              className='repos'
              title='Repositórios'
              repos={repos}
            />
        }
        
        {!!starred.length &&
            <Repos 
              className='repos'
              title='Favoritos'
              repos={starred}
            />
        }

    </main>
)

AppContent.propTypes = {
    userinfo: PropTypes.object,
    repos: PropTypes.array.isRequired,
    starred: PropTypes.array.isRequired,
    getRepos: PropTypes.func.isRequired,
    getStarred: PropTypes.func.isRequired
}

export default AppContent