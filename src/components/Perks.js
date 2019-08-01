import React, {Fragment} from 'react';

export default function Perks(props) {
    return (
        <Fragment>
            <div className="perks">
				<div className="perks__heading1">{props.perksheading1}</div>
				<div className="row">
					<div className="col-1-of-2">
						<div className="center perks__construction-photo"></div>
					</div>
					<div className="col-1-of-2">
					<p className="perks__bullet1">{props.perksBullet1}</p>
						<p className="perks__bullet2">{props.perksBullet2}</p>
					</div>
				</div>
				<div className="center perks__paragraph1">{props.perksParagraph1}</div>
				<hr className="perks__line"/>
				<div className="center perks__paragraph2">{props.perksParagraph2}</div>
			</div>
			<div className="perks__banner"></div>
        </Fragment>
    )
}
