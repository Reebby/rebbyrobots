import React from "react";

const Scroll = (props) => {
	console.log('Scroll')
	return (
		<div style={{overflow: 'scroll', border: '2px solid silver', height: '500px'}}>	
		{props.children}
		</div>
	);
};

export default Scroll;