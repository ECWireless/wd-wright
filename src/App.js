import React from 'react';
import './App.scss';

import Logo from './assets/Wright-Logo.png';
import Join from './assets/Join-Banner.png'

function App() {
	return (
		<div className="App">
			<div className="navigation">
				<div className="container-ipad">
					<a href="/">
						<img className="logo" src={Logo} alt="Logo"/>
					</a>
					<img className="join" src={Join} alt="Join"/>
				</div>
			</div>
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
			</div>
			<div className="perks">
				<div className="row">
					<div className="col-1-of-2">
						<p className="center">Test</p>
					</div>
					<div className="col-1-of-2">
						<p className="center">Test</p>
					</div>
				</div>
			</div>
			<div className="footer center">Footer</div>
		</div>
	);
}

export default App;