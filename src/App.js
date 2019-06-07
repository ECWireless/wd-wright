import React, { Component } from 'react';
import "scroll-behavior-polyfill";
import './App.scss';

import Banner from './components/Banner';
import Map from './components/Map';
import Navigation from './components/Navigation';
import Perks from './components/Perks';
import Testimonials from './components/Testimonials';
import Videos from './components/Videos';

export default class App extends Component {
	state = {
		navigation: 'navigation',
		footer: 'footer',
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
				<Banner />
				<Perks />
				<Videos />
				<Map />
				<Testimonials />
				<div className={this.state.footer}>
					<div className="footer__button-container">
						<a
							href="https://www.wdwright.com/apply-online"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button
								className="footer__apply-now"
							>
								Apply Now!
							</button>
						</a>
					</div>
				</div>
			</div>
		);
	}
}