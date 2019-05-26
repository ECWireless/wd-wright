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
			<div className="banner">Banner</div>
			<div className="main">Main</div>
			<div className="footer">Footer</div>
		</div>
	);
}

export default App;