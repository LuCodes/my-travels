import React from "react";

const Travel = ({ destination, ville, distance,  image, destination2, ville2, distance2,  image2 }) => (
  <figure>
    <img src={image} alt={destination} />
    <figcaption>
      <p>{ville}</p>
      <p>{destination}</p>
      <p>{distance}</p>
      <img src={image2} alt={destination} />
      <p>{ville2}</p>
      <p>{destination2}</p>
      <p>{distance2}</p>
    </figcaption>
  </figure>
);

export default Travel;