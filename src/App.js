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
			// Banner
			let bannerVideoUrl = responseJson.acf.banner.banner_video_url;
			let bannerButtonUrl = responseJson.acf.banner.banner_button_url;

			// Perks
			let perksHeading1 = responseJson.acf.perks.perks_heading_1;
			let perksBullet1 = responseJson.acf.perks.perk_bullet_1;
			let perksBullet2 = responseJson.acf.perks.perk_bullet_2;
			let perksParagraph1 = responseJson.acf.perks.perk_paragraph_1;
			let perksParagraph2 = responseJson.acf.perks.perk_paragraph_2;

			// Quotes
			let quotesHeading1 = responseJson.acf.quotes.quotes_heading_1;
			let quotesParagraph1 = responseJson.acf.quotes.quotes_paragraph_1;
			let quotesPhoto1 = responseJson.acf.quotes.quotes_photo_1.url;
			let quotesPhoto1Small = responseJson.acf.quotes.quotes_photo_1_small.url;

			let quotesHeading2 = responseJson.acf.quotes.quotes_heading_2;
			let quotesParagraph2_1 = responseJson.acf.quotes.quotes_paragraph_2_1;
			let quotesParagraph2_2 = responseJson.acf.quotes.quotes_paragraph_2_2;
			let quotesPhoto2 = responseJson.acf.quotes.quotes_photo_2.url;
			let quotesPhoto2Small = responseJson.acf.quotes.quotes_photo_2_small.url;

			let quotesHeading3 = responseJson.acf.quotes.quotes_heading_3;
			let quotesParagraph3 = responseJson.acf.quotes.quotes_paragraph_3;
			let quotesPhoto3 = responseJson.acf.quotes.quotes_photo_3.url;
			let quotesPhoto3Small = responseJson.acf.quotes.quotes_photo_3_small.url;

			let quotesHeading4 = responseJson.acf.quotes.quotes_heading_4;
			let quotesParagraph4 = responseJson.acf.quotes.quotes_paragraph_4;
			let quotesPhoto4 = responseJson.acf.quotes.quotes_photo_4.url;
			let quotesPhoto4Small = responseJson.acf.quotes.quotes_photo_4_small.url;
			
			this.setState({
				// Banner
				bannerVideoUrl,
				bannerButtonUrl,

				// Perks
				perksHeading1,
				perksBullet1,
				perksBullet2,
				perksParagraph1,
				perksParagraph2,

				// Quotes
				quotesHeading1,
				quotesParagraph1,
				quotesPhoto1,
				quotesPhoto1Small,

				quotesHeading2,
				quotesParagraph2_1,
				quotesParagraph2_2,
				quotesPhoto2,
				quotesPhoto2Small,

				quotesHeading3,
				quotesParagraph3,
				quotesPhoto3,
				quotesPhoto3Small,

				quotesHeading4,
				quotesParagraph4,
				quotesPhoto4,
				quotesPhoto4Small,
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
		
		window.addEventListener('scroll', this.handleScroll);
		window.addEventListener('scroll', this.handleFooter);

		return (
			<div className="App" >
				<Navigation navigation={this.state.navigation} />
				<Banner 
					myRef={this.myRef}
					bannerVideoUrl={this.state.bannerVideoUrl}
					bannerButtonUrl={this.state.bannerButtonUrl}
				/>

				<div style={{position: 'relative', top: '-100px'}} ref={ (ref) => this.myRef=ref }></div>
				<Perks 
					perksheading1={this.state.perksHeading1}
					perksBullet1={this.state.perksBullet1}
					perksBullet2={this.state.perksBullet2}
					perksParagraph1={this.state.perksParagraph1}
					perksParagraph2={this.state.perksParagraph2}
				/>
				<Quotes
					quotesHeading1={this.state.quotesHeading1}
					quotesParagraph1={this.state.quotesParagraph1}
					quotesPhoto1={this.state.quotesPhoto1}
					quotesPhoto1Small={this.state.quotesPhoto1Small}

					quotesHeading2={this.state.quotesHeading2}
					quotesParagraph2_1={this.state.quotesParagraph2_1}
					quotesParagraph2_2={this.state.quotesParagraph2_2}
					quotesPhoto2={this.state.quotesPhoto2}
					quotesPhoto2Small={this.state.quotesPhoto2Small}

					quotesHeading3={this.state.quotesHeading3}
					quotesParagraph3={this.state.quotesParagraph3}
					quotesPhoto3={this.state.quotesPhoto3}
					quotesPhoto3Small={this.state.quotesPhoto3Small}

					quotesHeading4={this.state.quotesHeading4}
					quotesParagraph4={this.state.quotesParagraph4}
					quotesPhoto4={this.state.quotesPhoto4}
					quotesPhoto4Small={this.state.quotesPhoto4Small}
				/>
				<Map />
				<Testimonials />
				<Footer footer={this.state.footer} />
			</div>
		);
	}
}