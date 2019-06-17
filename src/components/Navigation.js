import React, { Component, Fragment } from 'react';

import Logo2x from '../assets/Navigation/Wright-Logo-2x.png';
import Logo1x from '../assets/Navigation/Wright-Logo-1x.png';
import Join from '../assets/Navigation/Join-Banner-2x.png';

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
						<img
							srcSet={`${Logo1x} 481w, ${Logo2x} 962w`}
							sizes="(max-width: 56.25) 20vw, (max-width: 37.5em) 15vw, 200px"
							alt="Logo"
							className="logo"
							src={Logo2x}
						/>
						<img className="join" src={Join} alt="Join"/>
					</div>
				</div>
			</Fragment>
		)
	}
}