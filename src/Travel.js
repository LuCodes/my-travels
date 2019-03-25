import React from "react";

const Travel = ({ destination, ville, distance,  image}) => (
	<figure>

	<img src={image} alt={destination} />
	<figcaption>
	<p>{ville}</p>
	<p>{destination}</p>
	<p>{distance}</p>
	</figcaption>
	</figure>
	);

	export default Travel;