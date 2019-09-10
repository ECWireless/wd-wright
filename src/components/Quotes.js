import React, {Fragment} from 'react';
import flagger1 from '../assets/Kid-Workers/Flagger-1.jpg';
import flagger2 from '../assets/Kid-Workers/Flagger-2.jpg';

export default function Videos(props) {

    return (
        <Fragment>
            <div className="quotes">
				<div className="quotes__row-1 margin-b-large">
					<div className="quotes__text-1 margin-b-medium">
						<h1 className="quotes__heading1">WHAT DOES A TRAFFIC CONTROLLER DO?</h1>
						<p className="quotes__paragraph1">Traffic Controllers work with construction teams to create a safe work zone that ensure automobiles and pedestrians do not interfere with, or pose a danger, to laborers and their projects. Candidates must become certified in basic traffic safety techniques by attending a training class provided by the company. Set up work zones by using cones and barriers that show traffic where to drive, as well as holding up signs that tell traffic to either stop or to proceed slowly. Traffic Controllers must constantly be aware of both the construction and traffic activity taking place around them. Compliance with all safety regulations is mandatory.</p>
					</div>
					<img
						srcSet={`${props.quotesPhoto1Small} 465w, ${props.quotesPhoto1} 930w`}
						sizes="(max-width: 75em) 27vw,(max-width: 56.25em) 29vw, (max-width: 37.5em) 31vw, 465px"
						alt="kid-worker-1"
						className="quotes__photo-1"
						src={props.quotesPhoto1}
					/>
				</div>

				<div className="quotes__row-2 margin-b-large">
					<img
						srcSet={`${flagger1} 509w, ${flagger1} 1017w`}
						sizes="(max-width: 75em) 13vw, (max-width: 56.25em) 14vw, (max-width: 37.5em) 16vw, 250px"
						alt="kid-worker-2"
						className="quotes__photo-2" 
						src={props.quotesPhoto3}
					/>

					<div className="quotes__text-2 margin-b-medium">
						<h1 className="quotes__heading2">'PRODUCT YOU CAN STAND BEHIND'</h1>
						<p className="quotes__paragraph2 margin-b-medium">“I worked in construction before joining Wright as a Traffic Controller and I have seen what other companies offer. I believe we have a better product/service than our competitors. We build a partnership with our clients and learn exactly what they need. Our goal is to have everyone go home safe at the end of the day, and the quality of work  speaks for itself!</p>
						<p className="quotes__paragraph2">But this job isn't for everyone. Every day is different. This is not a desk job and you will be standing all day.  It’s up to you to earn respect from drivers going through your zone. You are in control! Know that if you don’t want to give 100% to this job, you need not apply.  At the end of day you will come home tired. If you are good employee you will be recognized and rewarded. Our motto is to support each other and do the best we can.”</p>
					</div>
				</div>

				<div className="quotes__row-3 margin-b-large">
					<div className="quotes__text-3 margin-b-medium">
						<h1 className="quotes__heading3">'MORE THAN AN EMPLOYEE'</h1>
						<p className="quotes__paragraph3">"I love working with Wright. They don't treat you like another worker, but a person. They know your name and know your life. When I had to leave work for family issues they never gave me any problem. I got treated like family, and that’s the reason why I’m still here!! Things in life happen and they know that and they support you through that.


						This company invests in you as much as you invest in it. Wright is a family company, and as a member of this family; I have a voice in this company and can effect change! Here I'm able to take care of myself and my family, not only for now, but for the future."</p>
					</div>
					<img
						srcSet={`${flagger2} 600w, ${flagger2} 1200w`}
						sizes="(max-width: 75em) 24vw, (max-width: 56.25em) 27vw, (max-width: 37.5em) 30vw, 502px"
						alt="kid-worker-3"
						className="quotes__photo-3"
						src={props.quotesPhoto3}
					/>
				</div>

				<div className="quotes__row-4">
					<img
						srcSet={`${props.quotesPhoto3Small} 327w, ${props.quotesPhoto3} 654w`}
						sizes="(max-width: 75em) 38vw, (max-width: 56.25em) 50vw, (max-width: 37.5em) 45vw, 500px"
						alt="kid-worker-4"
						className="quotes__photo-4"
						src={flagger2}
					/>
					<div className="quotes__text-4 margin-b-medium">
						<h1 className="quotes__heading4">'OPPORTUNITY FOR ADVANCEMENT'</h1>
						<p className="quotes__paragraph4">"I started working at Wright in 2007; it was a new learning experience. I had never done traffic controlling before, but the training they gave me helped me learn to adapt and control my surroundings quickly. I love being outdoors as a controller and the chance to take control of the situations. They put me through additional training to help me to meet and deal with people and foreman on a daily basis. If you want to learn–you get to learn. Management saw my effort and took me under their wings. I gave them 150% and I was rewarded. We are growing and there is plenty of room for more workers. Hard work does pay off!"</p>
					</div>
				</div>
			</div>
        </Fragment>
    )
}
