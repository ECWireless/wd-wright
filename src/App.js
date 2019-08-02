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

			// Map
			let mapHeading = responseJson.acf.map.map_heading;
			let mapParagraph1 = responseJson.acf.map.map_paragraph_1;
			let mapParagraph2 = responseJson.acf.map.map_paragraph_2;

			// Testimonial
			let testimonialsHailey = responseJson.acf.testimonials.testimonial_hailey.url;
			let testimonialsHeading = responseJson.acf.testimonials.testimonials_heading;

			let testimonialsRickHeading = responseJson.acf.testimonials.testimonials_rick_heading;
			let testimonialsRickParagraph1 = responseJson.acf.testimonials.testimonials_paragraph_rick_1;
			let testimonialsRickParagraph2 = responseJson.acf.testimonials.testimonials_paragraph_rick_2;
			let testimonialsRickParagraph3 = responseJson.acf.testimonials.testimonials_paragraph_rick_3;
			let testimonialsRickParagraph4 = responseJson.acf.testimonials.testimonials_paragraph_rick_4;
			let testimonialsRickParagraph5 = responseJson.acf.testimonials.testimonials_paragraph_rick_5;
			let testimonialsRickParagraph6 = responseJson.acf.testimonials.testimonials_paragraph_rick_6;

			let testimonialsHaileyHeading = responseJson.acf.testimonials.testimonials_hailey_heading;
			let testimonialsHaileyParagraph1 = responseJson.acf.testimonials.testimonials_paragraph_hailey_1;
			let testimonialsHaileyParagraph2 = responseJson.acf.testimonials.testimonials_paragraph_hailey_2;
			let testimonialsHaileyParagraph3 = responseJson.acf.testimonials.testimonials_paragraph_hailey_3;
			let testimonialsHaileyParagraph4 = responseJson.acf.testimonials.testimonials_paragraph_hailey_4;
			let testimonialsHaileyParagraph5 = responseJson.acf.testimonials.testimonials_paragraph_hailey_5;

			let testimonialsChrisHeading = responseJson.acf.testimonials.testimonials_chris_heading;
			let testimonialsChrisParagraph1 = responseJson.acf.testimonials.testimonials_paragraph_chris_1;
			let testimonialsChrisParagraph2 = responseJson.acf.testimonials.testimonials_paragraph_chris_2;
			let testimonialsChrisParagraph3 = responseJson.acf.testimonials.testimonials_paragraph_chris_3;
			
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

				// Map
				mapHeading,
				mapParagraph1,
				mapParagraph2,

				// Testimonial
				testimonialsHailey,
				testimonialsHeading,

				testimonialsRickHeading,
				testimonialsRickParagraph1,
				testimonialsRickParagraph2,
				testimonialsRickParagraph3,
				testimonialsRickParagraph4,
				testimonialsRickParagraph5,
				testimonialsRickParagraph6,

				testimonialsHaileyHeading,
				testimonialsHaileyParagraph1,
				testimonialsHaileyParagraph2,
				testimonialsHaileyParagraph3,
				testimonialsHaileyParagraph4,
				testimonialsHaileyParagraph5,

				testimonialsChrisHeading,
				testimonialsChrisParagraph1,
				testimonialsChrisParagraph2,
				testimonialsChrisParagraph3,
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
				<Map
					mapHeading={this.state.mapHeading}
					mapParagraph1={this.state.mapParagraph1}
					mapParagraph2={this.state.mapParagraph2}
				/>
				<Testimonials
					hailey={this.state.testimonialsHailey}
					testimonialsHeading={this.state.testimonialsHeading}

					testimonialsRickHeading={this.state.testimonialsRickHeading}
					testimonialsRickParagraph1={this.state.testimonialsRickParagraph1}
					testimonialsRickParagraph2={this.state.testimonialsRickParagraph2}
					testimonialsRickParagraph3={this.state.testimonialsRickParagraph3}
					testimonialsRickParagraph4={this.state.testimonialsRickParagraph4}
					testimonialsRickParagraph5={this.state.testimonialsRickParagraph5}
					testimonialsRickParagraph6={this.state.testimonialsRickParagraph6}

					testimonialsHaileyHeading={this.state.testimonialsHaileyHeading}
					testimonialsHaileyParagraph1={this.state.testimonialsHaileyParagraph1}
					testimonialsHaileyParagraph2={this.state.testimonialsHaileyParagraph2}
					testimonialsHaileyParagraph3={this.state.testimonialsHaileyParagraph3}
					testimonialsHaileyParagraph4={this.state.testimonialsHaileyParagraph4}
					testimonialsHaileyParagraph5={this.state.testimonialsHaileyParagraph5}

					testimonialsChrisHeading={this.state.testimonialsChrisHeading}
					testimonialsChrisParagraph1={this.state.testimonialsChrisParagraph1}
					testimonialsChrisParagraph2={this.state.testimonialsChrisParagraph2}
					testimonialsChrisParagraph3={this.state.testimonialsChrisParagraph3}
				/>
				<Footer footer={this.state.footer} />
			</div>
		);
	}
}