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
				<div className="perks__heading1">We are looking for individuals who are ready to start a career or start on a new career path.</div>
				<div className="row">
					<div className="col-1-of-2">
						<div className="center perks__construction-photo"></div>
					</div>
					<div className="col-1-of-2">
					<p className="perks__bullet1">• GET PAID WEEKLY</p>
						<p className="perks__bullet2">• GET A RAISE AFTER 6 MONTHS</p>
					</div>
				</div>
				<div className="center perks__paragraph1">Candidates must become certified in basic traffic safety techniques by Attending a training class provided by the company.</div>
				<hr className="perks__line"/>
				<div className="center perks__paragraph2">Workers must maintain a valid driver’s license during entire employment and must pass a drug test prior to employment.</div>
			</div>
			<div className="perks__banner"></div>
			<div className="footer center">Footer</div>
		</div>
	);
}

export default App;