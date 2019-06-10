import React, {Fragment} from 'react'

export default function Videos() {
    return (
        <Fragment>
            <div className="videos">
				<div className="row">
					<div className="col-1-of-2">
						<p className="videos__heading1">Safe Communities</p>
						<p className="videos__paragraph1">"My Dad keeps neighborhoods safe."
						</p>
					</div>
					<div className="col-1-of-2">
						<iframe
							className="videos__video1"
							src="https://player.vimeo.com/video/338717235"
							frameBorder="0"
							allow="autoplay; fullscreen"
							allowFullScreen
							title="banner-video"
						>
						</iframe>
					</div>
				</div>

				<div className="row">
					<div className="col-1-of-2">
					<iframe
							className="videos__video2"
							src="https://player.vimeo.com/video/338717235"
							frameBorder="0"
							allow="autoplay; fullscreen"
							allowFullScreen
							title="banner-video"
						>
						</iframe>
					</div>
					<div className="col-1-of-2">
						<div className="videos__heading2">Not a Desk Job</div>
						<p className="videos__paragraph2">"Rain or shine my aunt gets the job done."
						</p>
					</div>
				</div>

				<div className="row">
					<div className="col-1-of-2">
						<p className="videos__heading1 margin-t-medium">Work Family</p>
						<p className="videos__paragraph1">"My Mom's co-workers help each other. They are like a family."
						</p>
					</div>
					<div className="col-1-of-2">
						<iframe
							className="videos__video1"
							src="https://player.vimeo.com/video/338717235"
							frameBorder="0"
							allow="autoplay; fullscreen"
							allowFullScreen
							title="banner-video"
						>
						</iframe>
					</div>
				</div>

				<div className="row">
					<div className="col-1-of-2">
					<iframe
							className="videos__video3"
							src="https://player.vimeo.com/video/338717235"
							frameBorder="0"
							allow="autoplay; fullscreen"
							allowFullScreen
							title="banner-video"
						>
						</iframe>
					</div>
					<div className="col-1-of-2">
						<div className="videos__heading3 margin-t-medium">Control Your Career</div>
						<p className="videos__paragraph3 margin-b-medium">"The boss tells my uncle he's a good worker."
						</p>
					</div>
				</div>
			</div>
        </Fragment>
    )
}
