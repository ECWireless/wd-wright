import React, {Fragment} from 'react';

import Logo from '../assets/Wright-Logo.png';
import Join from '../assets/Join-Banner.png';

export default function Navigation() {
    return (
        <Fragment>
            <div className="navigation">
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
