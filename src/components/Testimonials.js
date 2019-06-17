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
			);
		} else if (this.state.clicked2) {
			testimonial = (
				<div className={this.state.clicked2 ? "testimonial-fade-2" : ""}>
					<div className="testimonials__heading2">What Hailey Wants You To Know:</div>
					<p className="testimonials__paragraph">“I started as a flagger in 2017. I had prior experience in traffic control and enjoyed that line of work. 
						I like being outside and interacting with so many different people. 
						We are responsible for ensuring the safety of our clients and everyday motorists who enter our sites. 
						If our clients are able to perform their jobs effectively because they feel safe and protected by
						our employees, then I feel we are successful in what we are doing.
					</p>

					<p className="testimonials__paragraph">Our team of Field Supervisors work together great.
						Now as a supervisor, I feel it is my job to teach our employees as much as I can about their jobs
						and make sure they are doing their jobs correctly.
						I also try to inspire them so that they are proud of what they are doing. 
						I feel rewarded each day when our teams have performed their jobs to the fullest and best of
						their ability and everyone gets to go home safe.
					</p>

					<p className="testimonials__paragraph">This job is definitely not for everyone. I believe if someone wants to work and take pride in what they do,
						that they can be successful at Wright.
						There are long hours and the work/family life balance can be challenging, but if you do your job well
						and show up each day, there is room for growth.
					</p>

					<p className="testimonials__paragraph">Wright is an ever-growing company with many opportunities.
						The need for the work that we perform is so great in our industry. 
					</p>

					<p className="testimonials__paragraph">We are growing and there is plenty of room for more workers."</p>
				</div>
			);
		} else {
			testimonial = (
				<div className={this.state.clicked3 ? "testimonial-fade-3" : ""}>
					<div className="testimonials__heading2">What Chris Wants You to Know:</div>
					<p className="testimonials__paragraph">“I worked in construction before joining Wright as a flagger and I love being outside.
						Everyone knows the flagger in the field. I believe we have a better product/service than our
						competitors, and we get to know our contractors. Our crews are like a family, and we make it fun. 
					</p>

					<p className="testimonials__paragraph">Every day is different. This is not a desk job and you will be standing all day. It’s up to you to earn
						respect from drivers going through your zone. You are in control.
						Know that at the end of day you will come home tired. 
					</p>

					<p className="testimonials__paragraph">If you are good employee you will be recognized and rewarded.
						Our motto is to support each other and do the best we can. 
						If you don’t want to give 100% to this job, you need not apply.” 
					</p>
				</div>
			);
		}

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
							<div className="testimonials__name--2"></div>
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
							{testimonial}
						</div>
					</div>
				</div>
			</Fragment>
		)
	}
}
