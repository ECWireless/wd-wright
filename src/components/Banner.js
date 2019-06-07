import React, { Component, Fragment } from 'react';

export default class Banner extends Component {

	handleScroll = () => {
		window.scroll({
			top: 500,
			behavior: 'smooth'
		})
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
					<div className="button-container">
						<a href="https://www.wdwright.com/apply-online" target="_blank" rel="noopener noreferrer">
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
