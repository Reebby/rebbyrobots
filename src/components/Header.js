import React, { Component } from 'react';

class Header extends Component {
shouldComponentUpdate(nextProps, nextState) {
		return false;
	}
render() {
<<<<<<< HEAD
=======
	console.log('Header')
>>>>>>> 9af1d05e8504e449885f79a22972ab18f7e4deeb
	return <h1 className="f1"> Rebby's Robots </h1>
}
}

export default Header;