import React from "react";
import "tachyons";

const Card = ({name,email,id}) => {
	return (
		<div className="tc bg-light-blue dib br3 pa3 ma2 grow bw-2 shadow-5">
		<img alt="robots" src={`https://robohash.org/${id}?150x150`} />
		<h3>{name} </h3>
		<p> {email} </p>
		</div>
		);
}

export default Card;