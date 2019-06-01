import React from 'react';
import './App.scss';

import Banner from './components/Banner';
import Map from './components/Map';
import Navigation from './components/Navigation';
import Perks from './components/Perks';
import Testimonials from './components/Testimonials';
import Videos from './components/Videos';

function App() {
	return (
		<div className="App">
			<Navigation />
			<Banner />
			<Perks />
			<Videos />
			<Map />
			<Testimonials />
			<div className="footer"></div>
		</div>
	);
}

export default App;