import React, {Fragment} from 'react';

// 2x Density
import Kid3 from '../assets/Kid-Workers/Medium/Kid-5-2x.png';
import Kid4 from '../assets/Kid-Workers/Medium/Kid-6-2x.png';

// 1x Density
import Kid3Small from '../assets/Kid-Workers/Small/Kid-5-1x.png';
import Kid4Small from '../assets/Kid-Workers/Small/Kid-6-1x.png';

export default function Videos(props) {

    return (
        <Fragment>
            <div className="quotes">
				<div className="quotes__row-1 margin-b-large">
					<div className="quotes__text-1 margin-b-medium">
						<p className="quotes__heading1">{props.quotesHeading1}</p>
						<p className="quotes__paragraph1">{props.quotesParagraph1}</p>
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
						srcSet={`${props.quotesPhoto2Small} 327w, ${props.quotesPhoto2} 654w`}
						sizes="(max-width: 75em) 13vw, (max-width: 56.25em) 14vw, (max-width: 37.5em) 16vw, 250px"
						alt="kid-worker-2"
						className="quotes__photo-2" 
						src={props.quotesPhoto2}
					/>

					<div className="quotes__text-2 margin-b-medium">
						<div className="quotes__heading2">{props.quotesHeading2}</div>
						<p className="quotes__paragraph2 margin-b-medium">{props.quotesParagraph2_1}</p>
						<p className="quotes__paragraph2">{props.quotesParagraph2_2}</p>
					</div>
				</div>

				<div className="quotes__row-3 margin-b-large">
					<div className="quotes__text-3 margin-b-medium">
						<p className="quotes__heading3">{props.quotesHeading2}</p>
						<p className="quotes__paragraph3">{props.quotesParagraph3}</p>
					</div>
					<img
						srcSet={`${Kid3Small} 509w, ${Kid3} 1017w`}
						sizes="(max-width: 75em) 24vw, (max-width: 56.25em) 27vw, (max-width: 37.5em) 30vw, 502px"
						alt="kid-worker-3"
						className="quotes__photo-3"
						src={Kid3}
					/>
				</div>

				<div className="quotes__row-4">
					<img
						srcSet={`${Kid4Small} 600w, ${Kid4} 1200w`}
						sizes="(max-width: 75em) 38vw, (max-width: 56.25em) 50vw, (max-width: 37.5em) 45vw, 500px"
						alt="kid-worker-4"
						className="quotes__photo-4"
						src={Kid4}
					/>
					<div className="quotes__text-4 margin-b-medium">
						<div className="quotes__heading4">{props.quotesHeading4}</div>
						<p className="quotes__paragraph4">{props.quotesParagraph4}</p>
					</div>
				</div>
			</div>
        </Fragment>
    )
}
