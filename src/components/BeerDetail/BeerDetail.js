import React from 'react';

const BeerDetail = ({ beer }) => {
  if (!beer) return <div>Loading</div>;

  return (
    <div>
      <img src={beer.image_url} alt={beer.name} style={{ maxHeight: '150px' }}/>
      <h1>{beer.name}</h1>
      <h2>{beer.tagline}</h2>
      <p>{beer.description}</p>
    </div>
  );
};

export default BeerDetail;