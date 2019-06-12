import React, {Fragment} from 'react';

// 2x Density
import Kid1 from '../assets/Kid-Workers/Medium/Kid-4-2x.png';
import Kid2 from '../assets/Kid-Workers/Medium/Kid-2-2x.png';
import Kid3 from '../assets/Kid-Workers/Medium/Kid-5-2x.png';
import Kid4 from '../assets/Kid-Workers/Medium/Kid-6-2x.png';

// 1x Density
import Kid1Small from '../assets/Kid-Workers/Small/Kid-4-1x.png';
import Kid2Small from '../assets/Kid-Workers/Small/Kid-2-1x.png';
import Kid3Small from '../assets/Kid-Workers/Small/Kid-5-1x.png';
import Kid4Small from '../assets/Kid-Workers/Small/Kid-6-1x.png';

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
					<img
						srcSet={`${Kid1Small} 465w, ${Kid1} 930w`}
						sizes="(max-width: 1200px) 27vw,(max-width: 900px) 29vw, (max-width: 600px) 31vw, 465px"
						alt="kid-worker-1"
						className="quotes__photo-1"
						src={Kid1}
					/>
				</div>

				<div className="quotes__row-2 margin-b-large">
					<img
						srcSet={`${Kid2Small} 327w, ${Kid2} 654w`}
						sizes="(max-width: 1200px) 10vw, (max-width: 900px) 14vw, (max-width: 600px) 16vw, 250px"
						alt="kid-worker-2"
						className="quotes__photo-2" 
						src={Kid2}
					/>

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
					<img
						srcSet={`${Kid3Small} 509w, ${Kid3} 1017w`}
						sizes="(max-width: 1200px) 20vw, (max-width: 900px) 27vw, (max-width: 600px) 30vw, 502px"
						alt="kid-worker-3"
						className="quotes__photo-3"
						src={Kid3}
					/>
				</div>

				<div className="quotes__row-4">
					<img
						srcSet={`${Kid4Small} 600w, ${Kid4} 1200w`}
						sizes="(max-width: 1200px) 38vw, (max-width: 900px) 50vw, (max-width: 600px) 45vw, 500px"
						alt="kid-worker-4"
						className="quotes__photo-4"
						src={Kid4}
					/>
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
