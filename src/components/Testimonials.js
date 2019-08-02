import React, { Component, Fragment } from 'react';

export default class Testimonials extends Component {
	state = {
		clicked1: true,
		clicked2: false,
		clicked3: false,
		triangle: 'testimonials__triangle testimonials__triangle--left',
	}

	handleClicked1 = () => {
		this.setState({
			clicked1: true,
			clicked2: false,
			clicked3: false,
			triangle: 'testimonials__triangle testimonials__triangle--left',
		})
	}

	handleClicked2 = () => {
		this.setState({
			clicked1: false,
			clicked2: true,
			clicked3: false,
			triangle: 'testimonials__triangle testimonials__triangle--center',
		})
	}

	handleClicked3 = () => {
		this.setState({
			clicked1: false,
			clicked2: false,
			clicked3: true,
			triangle: 'testimonials__triangle testimonials__triangle--right',
		})
	}

	render() {

		let testimonial = null;
		
		if (this.state.clicked1) {
			testimonial = (
				<div className={this.state.clicked1 ? "testimonial-fade-1" : ""}>
					<h1 className="testimonials__heading2">{this.props.testimonialsRickHeading}</h1>
					<p className="testimonials__paragraph">{this.props.testimonialsRickParagraph1}</p>

					<p className="testimonials__paragraph">{this.props.testimonialsRickParagraph2}</p>

					<p className="testimonials__paragraph">{this.props.testimonialsRickParagraph3}</p>

					<p className="testimonials__paragraph">{this.props.testimonialsRickParagraph4}</p>

					<p className="testimonials__paragraph">{this.props.testimonialsRickParagraph5}</p>

					<p className="testimonials__paragraph">{this.props.testimonialsRickParagraph6}</p>
				</div>
			);
		} else if (this.state.clicked2) {
			testimonial = (
				<div className={this.state.clicked2 ? "testimonial-fade-2" : ""}>
					<h1 className="testimonials__heading2">{this.props.testimonialsHaileyHeading}</h1>
					<p className="testimonials__paragraph">{this.props.testimonialsHaileyParagraph1}</p>

					<p className="testimonials__paragraph">{this.props.testimonialsHaileyParagraph2}</p>

					<p className="testimonials__paragraph">{this.props.testimonialsHaileyParagraph3}</p>

					<p className="testimonials__paragraph">{this.props.testimonialsHaileyParagraph4}</p>

					<p className="testimonials__paragraph">{this.props.testimonialsHaileyParagraph5}</p>
				</div>
			);
		} else {
			testimonial = (
				<div className={this.state.clicked3 ? "testimonial-fade-3" : ""}>
					<h1 className="testimonials__heading2">{this.props.testimonialsChrisHeading}</h1>
					<p className="testimonials__paragraph">{this.props.testimonialsChrisParagraph1}</p>

					<p className="testimonials__paragraph">{this.props.testimonialsChrisParagraph2}</p>

					<p className="testimonials__paragraph">{this.props.testimonialsChrisParagraph3}</p>
				</div>
			);
		}

		return (
			<Fragment>
				<div className="testimonials">
					<h1 className="testimonials__heading1">{this.props.testimonialsHeading}</h1>
					<div className="testimonials__photos">
						<div 
							className={
								this.state.clicked1 
								? "testimonials__box testimonials__box--clicked" 
								: "testimonials__box"
							}
							onClick={this.handleClicked1}
						>
							<p className="testimonials__name">Photo of Rick</p>
						</div>
						<div
							className={
								this.state.clicked2
								? "testimonials__box testimonials__box--clicked" 
								: "testimonials__box"
							}
							onClick={this.handleClicked2}
						>
							<div className="testimonials__name--2" style={{backgroundImage: `url(${this.props.hailey})`}}></div>
						</div>
						<div
							className={
								this.state.clicked3
								? "testimonials__box testimonials__box--clicked" 
								: "testimonials__box"
							}
							onClick={this.handleClicked3}
						>
							<p className="testimonials__name">Photo of Chris</p>
						</div>
					</div>
					<div className={this.state.triangle}></div>
					<div className="testimonials__testimonial">
						<div className="testimonials__container">
							{testimonial}
						</div>
					</div>
				</div>
			</Fragment>
		)
	}
}
