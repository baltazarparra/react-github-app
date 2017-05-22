import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ handleSearch }) => (
    <div className='search'>
        <label>
          <span>Digite o nome do usuário</span>
          <input
            type='search'
            placeholder='Ex. Baltazar Parra'
            onKeyUp={handleSearch}
          />
        </label>
    </div>
)

Search.propTypes = {
    handleSearch: PropTypes.func.isRequired
}

export default Search