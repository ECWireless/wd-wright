import React, {Fragment} from 'react';
import Kid4 from '../assets/Kid-Workers/Kid-4.png';
import Kid5 from '../assets/Kid-Workers/Kid-5.png';
import Kid2 from '../assets/Kid-Workers/Kid-2.png';
import Kid6 from '../assets/Kid-Workers/Kid-6.png';

export default function Videos() {
    return (
        <Fragment>
            <div className="quotes">
				<div className="quotes__row-1 margin-b-large">
					<div className="quotes__text-1 margin-b-medium">
						<p className="quotes__heading1">"My Dad keeps neighborhoods safe"</p>
						<p className="quotes__paragraph1">Join us if you are eager to develop your skills and apply 
							them together to create a safe community where people play,
							work, learn and live. And you’ll get all the training you need.
							You will be in charge of maintaining high safety standards on
							roadways with unpredictable motorists.
						</p>
					</div>
					<img className="quotes__photo-1" src={Kid4} alt="kid-1"/>
				</div>

				<div className="quotes__row-2 margin-b-large">
					<img className="quotes__photo-2" src={Kid2} alt="kid-2"/>

					<div className="quotes__text-2 margin-b-medium">
						<div className="quotes__heading2">“Rain or shine my aunt gets the job done”</div>
						<p className="quotes__paragraph2 margin-b-medium">We promote from within.</p>
						<p className="quotes__paragraph2">When you work hard you’ll be rewarded. You can get promoted
							within months and earn responsibility for your work team and
							drive a company truck.
						</p>
					</div>
				</div>

				<div className="quotes__row-3 margin-b-large">
					<div className="quotes__text-3 margin-b-medium">
						<p className="quotes__heading3">“My Mom’s co-workers help each other. They are like a family”</p>
						<p className="quotes__paragraph3">You are part of a team of workers. We know it takes
							A diverse team to build the future and we are looking
							for all types of talent to contribute.
						</p>
					</div>
					<img className="quotes__photo-3" src={Kid5} alt="kid-3"/>
				</div>

				<div className="quotes__row-4">
					<img className="quotes__photo-4" src={Kid6} alt="kid-4"/>
					<div className="quotes__text-4 margin-b-medium">
						<div className="quotes__heading4">“The boss tells my uncle he’s a good worker”</div>
						<p className="quotes__paragraph4">You can enjoy working outside and the variety of each
							new job site. No day is the same. If you pay attention and can
							handle directing a high volume of traffic, this job is made for you.
						</p>
					</div>
				</div>
			</div>
        </Fragment>
    )
}
