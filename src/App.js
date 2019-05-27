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
						frameborder="0"
						allow="autoplay; fullscreen"
						allowfullscreen
						title="banner-video"
					>
					</iframe>
				</div>
				<div className="button-container">
					<a href="https://www.wdwright.com/apply-online">
						<button
							className="apply-now"
						>
							Apply Now!
						</button>
					</a>
				</div>
			</div>
			<div className="main">Main</div>
			<div className="footer">Footer</div>
		</div>
	);
}

export default App;