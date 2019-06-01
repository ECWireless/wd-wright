import React, {Fragment} from 'react'

export default function Banner() {
    return (
        <Fragment>
            <div className="banner">
				<div className="banner__photo"/>
				<div className="banner__video">
					<iframe
						className="video-size"
						src="https://player.vimeo.com/video/338717235"
						frameBorder="0"
						allow="autoplay; fullscreen"
						allowFullScreen
						title="banner-video"
					>
					</iframe>
				</div>
				<div className="button-container">
					<a href="https://www.wdwright.com/apply-online" target="_blank" rel="noopener noreferrer">
						<button
							className="apply-now"
						>
							Apply Now!
						</button>
					</a>
				</div>
			</div>
        </Fragment>
    )
}
