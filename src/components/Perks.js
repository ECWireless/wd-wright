import React, {Fragment} from 'react';

export default function Perks() {
    return (
        <Fragment>
            <div className="perks">
				<div className="perks__heading1">We are looking for individuals who are ready to start a career or start on a new career path.</div>
				<div className="row">
					<div className="col-1-of-2">
						<div className="center perks__construction-photo"></div>
					</div>
					<div className="col-1-of-2">
					<p className="perks__bullet1">• GET PAID WEEKLY</p>
						<p className="perks__bullet2">• GET A RAISE AFTER 6 MONTHS</p>
					</div>
				</div>
				<div className="center perks__paragraph1">Candidates must become certified in basic traffic safety techniques by Attending a training class provided by the company.</div>
				<hr className="perks__line"/>
				<div className="center perks__paragraph2">Workers must maintain a valid driver’s license during entire employment and must pass a drug test prior to employment.</div>
			</div>
			<div className="perks__banner"></div>
        </Fragment>
    )
}
