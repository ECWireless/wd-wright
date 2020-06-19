import React, {Fragment} from 'react';
import FAQ from '../assets/Perks/FAQ.png';

export default function Perks(props) {
    return (
        <Fragment>
            <div className="perks">
				<h2 className="perks__heading1">{props.perksHeading1}</h2>
				<h1 className="perks__heading2">{props.perksHeading2}</h1>

				{/* <div className="row">
					<div className="col-1-of-2">
						<div className="center perks__construction-photo"></div>
					</div>
					<div className="col-1-of-2">
					<p className="perks__bullet1">{props.perksBullet1}</p>
						<p className="perks__bullet2">{props.perksBullet2}</p>
					</div>
				</div> */}
				<p className="center perks__paragraph1">{props.perksParagraph1}</p>
				{/* <hr className="perks__line"/>
				<p className="center perks__paragraph2">{props.perksParagraph2}</p> */}
				<h1 className="perks__heading3">{props.perksHeading3}</h1>
				<div className="perks__faqs">
					<img className="perks__faqs-image" src={FAQ} alt="FAQ Sheet"/>
				</div>
				
			</div>
			<div alt="Traffic Cones" className="perks__banner"></div>
        </Fragment>
    )
}
