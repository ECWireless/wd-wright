import React, { Component } from 'react';
import "scroll-behavior-polyfill";
import './App.scss';

import Banner from './components/Banner';
import Footer from './components/Footer';
import Map from './components/Map';
import Navigation from './components/Navigation';
import Perks from './components/Perks';
import Quotes from './components/Quotes';
// import Testimonials from './components/Testimonials';
import Trucks from './components/Trucks';

const root = 'https://backend.wdwwork.com/wp-json/wp/v2/pages/322';

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
			let perksHeading2 = responseJson.acf.perks.perks_heading_2;
			let perksParagraph1 = responseJson.acf.perks.perks_paragraph_1;
			let perksHeading3 = responseJson.acf.perks.perks_heading_3

			// // Quotes
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

			// // Map
			let mapHeading = responseJson.acf.map.map_heading;
			let mapParagraph1 = responseJson.acf.map.map_paragraph_1;
			let mapParagraph2 = responseJson.acf.map.map_paragraph_2;

			// Trucks
			let trucksHeading1 = responseJson.acf.trucks.trucks_heading_1;
			let trucksHeading2 = responseJson.acf.trucks.trucks_heading_2;
			let trucksListItem1 = responseJson.acf.trucks.trucks_list_item_1;
			let trucksListItem2 = responseJson.acf.trucks.trucks_list_item_2;
			let trucksListItem3 = responseJson.acf.trucks.trucks_list_item_3;
			let trucksListItem4 = responseJson.acf.trucks.trucks_list_item_4;
			let trucksHeading5 = responseJson.acf.trucks.trucks_heading_5;
			let trucksParagraph1 = responseJson.acf.trucks.trucks_paragraph_1;
			let trucksParagraph2 = responseJson.acf.trucks.trucks_paragraph_2;
			let trucksHeading3 = responseJson.acf.trucks.trucks_heading_3;
			let trucksHeading6 = responseJson.acf.trucks.trucks_heading_6;
			let trucksHeading4 = responseJson.acf.trucks.trucks_heading_4;
			
			this.setState({
				// Banner
				bannerVideoUrl,
				bannerButtonUrl,

				// Perks
				perksHeading1,
				perksHeading2,
				perksParagraph1,
				perksHeading3,

				// // Quotes
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

				// // Map
				mapHeading,
				mapParagraph1,
				mapParagraph2,

				// Trucks
				trucksHeading1,
				trucksHeading2,
				trucksListItem1,
				trucksListItem2,
				trucksListItem3,
				trucksListItem4,
				trucksHeading5,
				trucksParagraph1,
				trucksParagraph2,
				trucksHeading3,
				trucksHeading6,
				trucksHeading4,
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
					perksHeading1={this.state.perksHeading1}
					perksHeading2={this.state.perksHeading2}
					perksParagraph1={this.state.perksParagraph1}
					perksHeading3={this.state.perksHeading3}
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
				<Trucks
					trucksHeading1={this.state.trucksHeading1}
					trucksHeading2={this.state.trucksHeading2}
					trucksListItem1={this.state.trucksListItem1}
					trucksListItem2={this.state.trucksListItem2}
					trucksListItem3={this.state.trucksListItem3}
					trucksListItem4={this.state.trucksListItem4}
					trucksHeading5={this.state.trucksHeading5}
					trucksParagraph1={this.state.trucksParagraph1}
					trucksParagraph2={this.state.trucksParagraph2}
					trucksHeading3={this.state.trucksHeading3}
					trucksHeading6={this.state.trucksHeading6}
					trucksHeading4={this.state.trucksHeading4}
				/>
				<Footer
					footer={this.state.footer}
					bannerButtonUrl={this.state.bannerButtonUrl}
				/>
			</div>
		);
	}
}