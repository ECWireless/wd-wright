import React, {Fragment} from 'react';

import Logo from '../assets/Wright-Logo.png';
import Join from '../assets/Join-Banner.png';

export default function Navigation(props) {
	console.log(props.navigation)
    return (
        <Fragment>
            <div className={props.navigation}>
				<div className="container-ipad">
					<a href="/">
						<img className="logo" src={Logo} alt="Logo"/>
					</a>
					<img className="join" src={Join} alt="Join"/>
				</div>
			</div>
        </Fragment>
    )
}
