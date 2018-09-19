import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import Header from "../components/Header";
import "./App.css";

class App extends Component  {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchbox: '',
		}
	}

	async componentDidMount() {
		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		const users = await response.json();
		return this.setState({robots: users})
	}

	searchChange = (event) => {
		this.setState({ searchbox: event.target.value })	
	}

	render() {
		const { robots, searchbox } = this.state;
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchbox.toLowerCase())
		})
      // const pic = Object.keys(this.state.contacts).map(key=> { key={key} meta = {this.state.movies[key]} })
		return !robots.length ? <h1 className="tc"> Loading </h1> :
		<div className="tc">
		<Header />
		<SearchBox searchChange={this.searchChange}/>
		<Scroll>
		<CardList robots = {filteredRobots}/>
		</Scroll>
		</div>
	}
	
}

export default App;