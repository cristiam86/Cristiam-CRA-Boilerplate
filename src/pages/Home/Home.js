import React, { useState, useEffect } from 'react';

import BeerList from '../../components/BeerList';

const Home = () => {
  const [beers, setBeers] = useState([]);
  console.log("TCL: Home -> beers", beers)

  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers').then(response => response.json()).then(data => setBeers(data));
  }, []);

  return (
    <>
      <div>Beer List</div>
      <BeerList beers={beers} />
    </>
  );
};

export default Home;
