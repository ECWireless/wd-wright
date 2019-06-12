import React, { Component, Fragment } from 'react';
import WebHero from '../assets/Banner/Wright-small-2.mp4';

export default class Banner extends Component {


	handleScroll = () => {
		window.scrollTo({
			top: this.props.myRef.offsetTop,
			behavior: 'smooth'
		});
	}

	render() {

		return (
			<Fragment>
				<div className="banner">
					<div className="banner__photo"/>
						<div className="banner__video">
							<iframe
								className="video-size"
								src="https://player.vimeo.com/video/338717235"
								frameBorder="0"
								allow="autoplay; fullscreen"
								allowFullScreen
								title="banner-video"
							>
							</iframe>
						</div>
					<div className="banner__container">
						<video className="banner__web-hero" autoPlay loop muted>
							<source src={WebHero} type='video/mp4' />
						</video>
					</div>
					<div className="button-container">
						<a href="https://wdwright.isolvedhire.com/jobmap/" target="_blank" rel="noopener noreferrer">
							<button
								className="apply-now"
							>
								Apply Now!
							</button>
						</a>
					</div>
					<div className="learn-more" onClick={this.handleScroll}>
						<div className="learn-more__text">
							Learn More
						</div>
						<div className="learn-more__symbol">
							&#10093;
						</div>
					</div>
				</div>
			</Fragment>
		)
	}
}
