import React, { Component } from 'react';
import './App.scss';

import Banner from './components/Banner';
import Map from './components/Map';
import Navigation from './components/Navigation';
import Perks from './components/Perks';
import Testimonials from './components/Testimonials';
import Videos from './components/Videos';

export default class App extends Component {
	state = {
		navigation: 'navigation'
	}

	handleScroll = () => {
		if (window.scrollY > 1) {
		  this.setState({
			navigation: 'navigation-fixed'
		  })
		} else if (window.scrollY === 0)  {
			this.setState({
				navigation: 'navigation'
			  })
		}
	}

	render() {
		
		window.addEventListener('scroll', this.handleScroll);

		return (
			<div className="App">
				<Navigation navigation={this.state.navigation} />
				<Banner />
				<Perks />
				<Videos />
				<Map />
				<Testimonials />
				<div className="footer"></div>
			</div>
		);
	}
}