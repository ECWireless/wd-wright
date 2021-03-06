import React, { Fragment } from 'react'

export default function Footer(props) {
    return (
        <Fragment>
            <div className={props.footer}>
                <div className="footer__button-container">
                    <a
                        href={props.bannerButtonUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button
                            className="footer__apply-now"
                        >
                            Apply Now!
                        </button>
                    </a>
                </div>
            </div>
        </Fragment>
    )
}
