import React, { Component } from 'react';
import "scroll-behavior-polyfill";
import './App.scss';

import Banner from './components/Banner';
import Footer from './components/Footer';
import Map from './components/Map';
import Navigation from './components/Navigation';
import Perks from './components/Perks';
import Quotes from './components/Quotes';
import Testimonials from './components/Testimonials';

export default class App extends Component {
	state = {
		navigation: 'navigation',
		footer: 'footer',
		myRef: null,
	}

	componentDidMount() {
		this.handleFooter();
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

	handleFooter = () => {
		if (window.scrollY > 400) {
			this.setState({
				footer: 'footer'
			})
		} else if (window.scrollY < 500)  {
			this.setState({
				footer: 'footer-hidden'
			  })
		}
	}

	render() {
		
		window.addEventListener('scroll', this.handleScroll);
		window.addEventListener('scroll', this.handleFooter);

		return (
			<div className="App" >
				<Navigation navigation={this.state.navigation} />
				<Banner myRef={this.myRef} />

				<div style={{position: 'relative', top: '-100px'}} ref={ (ref) => this.myRef=ref }></div>
				<Perks />
				<Quotes />
				<Map />
				<Testimonials />
				<Footer footer={this.state.footer} />
			</div>
		);
	}
}