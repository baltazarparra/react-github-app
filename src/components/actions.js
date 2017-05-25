import React from 'react';
import PropTypes from 'prop-types';

const Actions = ({ handleClick }) => (
    <div className='actions'>
        <button className='button button-clear' onClick={handleClick}>Repositórios</button>
        <button className='button button-clear' onClick={handleClick}>Favoritos</button>
    </div>
)

Actions.propTypes = {
    handleClick: PropTypes.func.isRequired
}

export default Actions