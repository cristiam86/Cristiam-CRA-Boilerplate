import React from 'react';

const BeerList = ({ beers }) => (
  <div>
    {beers.map((beer) => (
      <div key={beer.id} style={{ marginBottom: '50px' }}>
        <img src={beer.image_url} alt={beer.name} style={{ maxHeight: '150px' }}/>
        <h2>{beer.name}</h2>
        <p>{beer.tagline}</p>
        <a href={`/detail/${beer.id}`}>View more</a>
      </div>
    ))}
  </div>
);

export default BeerList;
