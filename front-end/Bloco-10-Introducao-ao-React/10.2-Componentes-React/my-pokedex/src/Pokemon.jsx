import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { pokemon : {name, id, type, image} } = this.props;
    return (
      <div className='Pokemon'>
        <div>
          <p>{name}</p>
          <p>{id}</p>
          <p>{type}</p>
        </div>
        <img src={image} alt={name} />
      </div>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.string,
  }).isRequired
}

export default Pokemon;