import React, { useState, useEffect } from 'react';

import BeerDetail from '../../components/BeerDetail';

const Detail = ({ match }) => {
  const [beer, setBeer] = useState(null);
  const beerId = match.params.id;
  console.log("TCL: Home -> beers", beerId, beer)

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers/${beerId}`).then(response => response.json()).then(data => setBeer(data[0]));
  }, []);

  return (
    <>
      <a href="/">Back to home</a>
      <BeerDetail beer={beer} />
    </>
  );
};

export default Detail;
