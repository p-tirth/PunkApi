import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./App.css"
import BeerCard from './components/beerCard'; // Make sure to adjust the import path

function App() {
  const [beerData, setBeerData] = useState([]);

  useEffect(() => {
    async function fetchRandomBeer() {
      try {
        const response = await axios.get('https://api.punkapi.com/v2/beers/random');
        setBeerData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchRandomBeer();
  }, []);

  return (
    <div className="flex justify-center items-center h-full bg-gray-900">
      {beerData.map(beer => (
        <BeerCard key={beer.id} beer={beer} />
      ))}
    </div>
  );
}

export default App;
