import React, { Component, Fragment } from 'react'

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

		return (
			<Fragment>
				<div className="testimonials">
					<div className="testimonials__heading1">Here is what workers say about Wright:</div>
					<div className="testimonials__photos">
						<div 
							className={
								this.state.clicked1 
								? "testimonials__box testimonials__box--clicked" 
								: "testimonials__box"
							}
							onClick={this.handleClicked1}
						>
							<div className="testimonials__name">Photo of Rick</div>
						</div>
						<div
							className={
								this.state.clicked2
								? "testimonials__box testimonials__box--clicked" 
								: "testimonials__box"
							}
							onClick={this.handleClicked2}
						>
							<div className="testimonials__name">Photo of Hailey</div>
						</div>
						<div
							className={
								this.state.clicked3
								? "testimonials__box testimonials__box--clicked" 
								: "testimonials__box"
							}
							onClick={this.handleClicked3}
						>
							<div className="testimonials__name">Photo of Chris</div>
						</div>
					</div>
					<div className={this.state.triangle}></div>
					<div className="testimonials__testimonial">
						<div className="testimonials__container">
							<div className="testimonials__heading2">What Rick Wants You to Know:</div>
							<p className="testimonials__paragraph">"I started working at Wright in 2007.</p>

							<p className="testimonials__paragraph">It was a new learning experience, and I got to meet and deal with
								people and foreman.
								If you want to learn—you get to learn. People took me under
								their wing, and I quickly moved up to field supervisor.</p>

							<p className="testimonials__paragraph">I loved being outdoors as a flagger and taking control
								of the situation.</p>

							<p className="testimonials__paragraph">Wright is a family company. When I had to leave work for
								family issues they never gave me any problem.
								I got treated like family, and that’s the reason why I’m still here!!!</p>

							<p className="testimonials__paragraph">Hard work does pay off. They know who works hard.
								I give them 150%, and I was rewarded.</p>

							<p className="testimonials__paragraph">We are growing and there is plenty of room for more workers."</p>
						</div>
					</div>
				</div>
			</Fragment>
		)
	}
}
