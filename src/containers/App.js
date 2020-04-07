import React, { Component } from 'react';
import Cardlist from '../components/CardList' ;
// import { robots } from './robots';
import Searchbox from '../components/Searchbox';
import './App.css';
import Scroll from '../components/Scroll'

class App extends Component {
	constructor(){
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> response.json())
			.then(users => {this.setState({robots:users})});
}

	onsearchChange = (event) => {
		this.setState({ searchfield: event.target.value})
	}

	render() {
		const { robots, searchfield } = this.state;
		const filterRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		  return !robots.length ?
		  <h1>Loading</h1> :
		  (
			  <div className='tc'>
				  <h1 className= 'f1'>Robofriends</h1>
				  <Searchbox searchChange ={this.onsearchChange}/>
				  <Scroll>
					  <Cardlist robots ={filterRobots} />
				  </Scroll>
			  </div>
		  );
		}
}

export default App;
