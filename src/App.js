import React from 'react';
import './App.scss';

import Navigation from './components/Navigation';
import Banner from './components/Banner';
import Perks from './components/Perks';

function App() {
	return (
		<div className="App">
			<Navigation />
			<Banner />
			<Perks />
			<div className="videos">
				<div className="row">
					<div className="col-1-of-2">
						<p className="videos__heading1">Safe Communities</p>
						<p className="videos__paragraph1">Join us if you are eager to develop your skills and apply 
							them together to create a safe community where people play,
							work, learn and live. And you’ll get all the training you need.
							You will be in charge of maintaining high safety standards on
							roadways with unpredictable motorists.
						</p>
					</div>
					<div className="col-1-of-2">
						<iframe
							className="videos__video1"
							src="https://player.vimeo.com/video/338717235"
							frameBorder="0"
							allow="autoplay; fullscreen"
							allowFullScreen
							title="banner-video"
						>
						</iframe>
					</div>
				</div>

				<div className="row">
					<div className="col-1-of-2">
					<iframe
							className="videos__video2"
							src="https://player.vimeo.com/video/338717235"
							frameBorder="0"
							allow="autoplay; fullscreen"
							allowFullScreen
							title="banner-video"
						>
						</iframe>
					</div>
					<div className="col-1-of-2">
						<div className="videos__heading2">CONTROL YOUR CAREER</div>
						<p className="videos__paragraph2 margin-b-medium">We promote from within.</p>
						<p className="videos__paragraph2">When you work hard you’ll be rewarded. You can get promoted
							within months and earn responsibility for your work team and
							drive a company truck.
						</p>
					</div>
				</div>

				<div className="row">
					<div className="col-1-of-2">
						<p className="videos__heading1 margin-t-medium">WORK FAMILY</p>
						<p className="videos__paragraph1">You are part of a team of workers. We know it takes
							A diverse team to build the future and we are looking
							for all types of talent to contribute.
						</p>
					</div>
					<div className="col-1-of-2">
						<iframe
							className="videos__video1"
							src="https://player.vimeo.com/video/338717235"
							frameBorder="0"
							allow="autoplay; fullscreen"
							allowFullScreen
							title="banner-video"
						>
						</iframe>
					</div>
				</div>

				<div className="row">
					<div className="col-1-of-2">
					<iframe
							className="videos__video3"
							src="https://player.vimeo.com/video/338717235"
							frameBorder="0"
							allow="autoplay; fullscreen"
							allowFullScreen
							title="banner-video"
						>
						</iframe>
					</div>
					<div className="col-1-of-2">
						<div className="videos__heading3 margin-t-medium">NOT A DESK JOB</div>
						<p className="videos__paragraph3 margin-b-medium">You can enjoy working outside and the variety of each
new job site. No day is the same. If you pay attention and can
handle directing a high volume of traffic, this job is made for you.
						</p>
					</div>
				</div>
			</div>
			<br />
			<div className="footer center">Footer</div>
		</div>
	);
}

export default App;