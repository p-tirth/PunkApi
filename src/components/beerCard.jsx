import React from 'react';
import { useState } from 'react';

const BeerDetails = ({ beer }) => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };
  return (
    <div className="max-w-lg mx-auto bg-gray-900 text-white rounded-xl overflow-hidden shadow-md p-6 flex">
      <div className="w-1/3 pr-6">
      <img className="w-full object-cover" src={beer.image_url} alt={beer.name} />
      </div>
      <div className="w-2/3">
        <h2 className="text-xl font-semibold">{beer.name}</h2>
        <p className="text-gray-500 text-sm">{beer.tagline}</p>
        <p className="mt-2">{beer.description}</p>
        <button onClick={handleToggle}>{isOn ? "ON" : "OFF"}</button>
      {
        isOn &&
        <div>
          <div className="mt-4">
            <p className="font-semibold">ABV: {beer.abv}%</p>
            <p className="font-semibold">IBU: {beer.ibu}</p>
            <p className="font-semibold">First Brewed: {beer.first_brewed}</p>
            <p className="font-semibold">Target FG: {beer.target_fg}</p>
            <p className="font-semibold">Target OG: {beer.target_og}</p>
            <p className="font-semibold">EBC: {beer.ebc}</p>
            <p className="font-semibold">SRM: {beer.srm}</p>
            <p className="font-semibold">pH: {beer.ph}</p>
            <p className="font-semibold">Attenuation Level: {beer.attenuation_level}%</p>
            <p className="font-semibold">Volume: {beer.volume.value} {beer.volume.unit}</p>
            <p className="font-semibold">Boil Volume: {beer.boil_volume.value} {beer.boil_volume.unit}</p>
          </div>
          <div className="mt-4">
            <p>Ingredients:</p>
            <div className="ml-6">
              <p>Malt:</p>
              <ul className="list-disc ml-6">
                {beer.ingredients.malt.map((malt, index) => (
                  <li key={index}>{malt.name} - {malt.amount.value} {malt.amount.unit}</li>
                  ))}
              </ul>
              <p>Hops:</p>
              <ul className="list-disc ml-6">
                {beer.ingredients.hops.map((hop, index) => (
                  <li key={index}>{hop.name} - {hop.amount.value} {hop.amount.unit} - Add: {hop.add} - Attribute: {hop.attribute}</li>
                  ))}
              </ul>
              <p>Yeast: {beer.ingredients.yeast}</p>
            </div>
          </div>
          <div className="mt-4">
            <p>Food Pairing:</p>
            <ul className="list-disc ml-6">
              {beer.food_pairing.map((pairing, index) => (
                <li key={index}>{pairing}</li>
                ))}
            </ul>
          </div>
          <div className="mt-4">
            <p>Brewer's Tips:</p>
            <p>{beer.brewers_tips}</p>
          </div>
          <p className="mt-4">Contributed By: {beer.contributed_by}</p>
        </div>}
    </div>
    </div>
  );
};

export default BeerDetails;
