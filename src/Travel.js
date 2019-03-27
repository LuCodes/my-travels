import React from "react";

const Travel = ({ destination, ville, distance,  image, star}) => (
	<figure>
	<img src={image ? image : "https://i1.wp.com/www.ecommerce-nation.com/wp-content/uploads/2018/10/404-error.jpg?fit=800%2C600&ssl=1"} alt={destination} />
	<figcaption>
	<p style = {background : star ? blue}>{ville}</p>
	<p>{destination}</p>
	<p>{distance}</p>
	</figcaption>
	</figure>

	);

	export default Travel;