import React, {Fragment} from 'react';

import Logo from '../assets/Wright-Logo.png';
import Join from '../assets/Join-Banner.png';

export default function Navigation(props) {
	console.log(props.navigation)
    return (
        <Fragment>
            <div className={props.navigation}>
				<div className="navigation__container">
					<a href="/">
						<img className="logo" src={Logo} alt="Logo"/>
						<img className="join" src={Join} alt="Join"/>
					</a>
				</div>
			</div>
        </Fragment>
    )
}
