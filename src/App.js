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

const root = 'https://wdtest.studiome.me/wp-json/wp/v2/pages/14';

export default class App extends Component {
	state = {
		navigation: 'navigation',
		footer: 'footer',
		myRef: null,
		test: "Test"
	}

	componentDidMount() {
		this.handleFooter();

		return fetch(root, {
			cache: "reload"
		})
		.then(response => response.json())
		.then(responseJson => {
            let perksHeading1 = responseJson.acf.perks.perks_heading_1;
			
			this.setState({
                perksHeading1
            })
        })
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

		console.log(this.state.perksHeading1)
		
		window.addEventListener('scroll', this.handleScroll);
		window.addEventListener('scroll', this.handleFooter);

		return (
			<div className="App" >
				<Navigation navigation={this.state.navigation} />
				<Banner myRef={this.myRef} />

				<div style={{position: 'relative', top: '-100px'}} ref={ (ref) => this.myRef=ref }></div>
				<Perks perksheading1={this.state.perksHeading1} />
				<Quotes />
				<Map />
				<Testimonials />
				<Footer footer={this.state.footer} />
			</div>
		);
	}
}