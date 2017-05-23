import React from 'react'
import Search from './search';
import UserInfo from './user-info';
import Actions from './actions';
import Repos from './repos';
import PropTypes from 'prop-types';

const AppContent = ({ userinfo, repos, starred, handleSearch, handleClick }) => (
    <main className='container App'>
    
        <Search handleSearch={handleSearch}/>
        {!!userinfo && <UserInfo userinfo={userinfo} />}
        {!!userinfo && <Actions handleClick={handleClick}/>}
        
        {!!repos.length &&
            <Repos 
              className='repos'
              title='Repositórios'
              repos={repos}
            />
        }
        
        {!!repos.length &&
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
    starred: PropTypes.array.isRequired
}

export default AppContent