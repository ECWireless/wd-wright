import React, { Component, Fragment } from 'react';

import Logo from '../assets/Wright-Logo.png';
import Join from '../assets/Join-Banner.png';

export default class Navigation extends Component {

	handleScrollToTop = () => {
		window.scroll({
			top: 0,
			behavior: 'smooth'
		})
	}
	
	render() {
		return (
			<Fragment>
				<div className={this.props.navigation}>
					<div className="navigation__container" onClick={this.handleScrollToTop}>
							<img className="logo" src={Logo} alt="Logo"/>
							<img className="join" src={Join} alt="Join"/>
					</div>
				</div>
			</Fragment>
		)
	}
}