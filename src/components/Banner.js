import React, { Component, Fragment } from 'react';

export default class Banner extends Component {

	state = {
		myRef: null,
	}

	handleScroll = () => {
		window.scrollTo({
			top: this.myRef.offsetTop,
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
					<div className="button-container">
						<a href="https://wdwright.isolvedhire.com" target="_blank" rel="noopener noreferrer">
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
					<div style={{position: 'relative', top: '-125px'}} ref={ (ref) => this.myRef=ref }></div>
				</div>
			</Fragment>
		)
	}
}
