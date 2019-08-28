import React, {Fragment} from 'react';
import FAQ from '../assets/Perks/FAQ.png';

export default function Perks(props) {
    return (
        <Fragment>
            <div className="perks">
				<h1 className="perks__heading1">DESK JOB NOT FOR YOU? LOOKING FOR SOMETHING MORE HANDS ON OR OUTSIDE? SOMEWHERE WITH POTENTIAL TO MOVE UP?</h1>
				<h1 className="perks__heading2">WRIGHT IS HIRING!</h1>

				{/* <div className="row">
					<div className="col-1-of-2">
						<div className="center perks__construction-photo"></div>
					</div>
					<div className="col-1-of-2">
					<p className="perks__bullet1">{props.perksBullet1}</p>
						<p className="perks__bullet2">{props.perksBullet2}</p>
					</div>
				</div> */}
				<p className="center perks__paragraph1">No experience necessary! Entry level position, starting pay at +$12.00 with raises every 3 months in your first year of employment! We promote from within!</p>
				{/* <hr className="perks__line"/>
				<p className="center perks__paragraph2">{props.perksParagraph2}</p> */}
				<h1 className="perks__heading3">FAQs</h1>
				<div className="perks__faqs">
					<img className="perks__faqs-image" src={FAQ} alt="FAQ Sheet"/>
				</div>
				
			</div>
			<div className="perks__banner"></div>
        </Fragment>
    )
}
