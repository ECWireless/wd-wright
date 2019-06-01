import React from 'react';
import './App.scss';

import Navigation from './components/Navigation';
import Banner from './components/Banner';
import Perks from './components/Perks';
import Videos from './components/Videos';

import MapPhoto from './assets/map.png';

function App() {
	return (
		<div className="App">
			<Navigation />
			<Banner />
			<Perks />
			<Videos />
			<div className="map">
				<div className="map__container">
					<div className="map__heading">Now hiring in...</div>
					<div className="row">
						<div className="col-1-of-2">
							<img
								src={MapPhoto}
								alt="Map"
								className="map__photo"
							/>
						</div>
						<div className="col-1-of-2">
							<div className="map__button-container">
								<div className="map__button map__button--1">
									<div className="map__button-text">PA</div>
								</div>
								<div className="map__button map__button--2">
									<div className="map__button-text">OH</div>
								</div>
								<div className="map__button map__button--3">
									<div className="map__button-text">IN</div>
								</div>

								<div className="map__button map__button--4">
									<div className="map__button-text">PA</div>
								</div>
								<div className="map__button map__button--5">
									<div className="map__button-text">OH</div>
								</div>
								<div className="map__button map__button--6">
									<div className="map__button-text">IN</div>
								</div>

								<div className="map__button map__button--7">
									<div className="map__button-text">IN</div>
								</div>
							</div>
						</div>
					</div>
					<p className="map__paragraph">The Wright Team is 1,500+ Strong.</p>
					<p className="map__paragraph">Join the Wright Team Today.</p>
				</div>
			</div>
			<br />
			<div className="footer center">Footer</div>
		</div>
	);
}

export default App;