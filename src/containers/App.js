import React, {Component} from "react";
import { connect } from 'react-redux';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import Header from "../components/Header";
import ErrorBoundary from '../components/ErrorBoundary';
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
		return isPending ? <h1 className="tc"> Loading </h1> :
		<div className="tc">
		<Header />
		<SearchBox searchChange={searchChange}/>
		<Scroll>
		<ErrorBoundary>
		   <CardList robots = {filteredRobots}/>
		</ErrorBoundary>
		</Scroll>
		</div>
	}
	
}

export default connect(mapStateToProps, mapDispatchToProps)(App);