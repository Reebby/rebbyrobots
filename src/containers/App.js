import React, {Component} from "react";
import { connect } from 'react-redux';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import Header from "../components/Header";
<<<<<<< HEAD
import ErrorBoundary from '../components/ErrorBoundary';
=======
>>>>>>> 9af1d05e8504e449885f79a22972ab18f7e4deeb
import "./App.css";

import { searchAction, requestRobots } from '../actions';

const mapStateToProps = state => {
	return {
		searchBox: state.searchRobots.searchBox,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		searchChange: (event) => dispatch(searchAction(event.target.value)),
		reqRobots: () => dispatch(requestRobots())
}
}

class App extends Component  {

	 componentDidMount() {
		this.props.reqRobots()
	}


	render() {
		const { searchBox, searchChange, robots, isPending  } = this.props;
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchBox.toLowerCase())
		})
<<<<<<< HEAD
		return isPending ? <h1 className="tc"> Loading </h1> :
		<div className="tc">
        <Header />
		<SearchBox searchChange={searchChange}/>
=======
      // const pic = Object.keys(this.state.contacts).map(key=> { key={key} meta = {this.state.movies[key]} })
		return !robots.length ? <h1 className="tc"> Loading </h1> :
		<div className="tc">
		<Header />
		<SearchBox searchChange={this.searchChange}/>
>>>>>>> 9af1d05e8504e449885f79a22972ab18f7e4deeb
		<Scroll>
		<ErrorBoundary>
		   <CardList robots = {filteredRobots}/>
		</ErrorBoundary>
		</Scroll>
		</div>
	}
	
}

export default connect(mapStateToProps, mapDispatchToProps)(App);