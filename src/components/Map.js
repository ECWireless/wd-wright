import React, { Component, Fragment } from 'react';

import MapPhoto from '../assets/map.png';

export default class Map extends Component {
	state = {
		button1: "map__button map__button--1",
		button2: "map__button map__button--2",
		button3: "map__button map__button--3",
		button4: "map__button map__button--4",
		button5: "map__button map__button--5",
		button6: "map__button map__button--6",
		button7: "map__button map__button--7",
	}

	clicked1 = () => {
		this.setState({
			button1: "map__button map__button--1 map__button--clicked",
			button2: "map__button map__button--2",
			button3: "map__button map__button--3",
			button4: "map__button map__button--4",
			button5: "map__button map__button--5",
			button6: "map__button map__button--6",
			button7: "map__button map__button--7",
		})
	}

	clicked2 = () => {
		this.setState({
			button1: "map__button map__button--1",
			button2: "map__button map__button--2 map__button--clicked",
			button3: "map__button map__button--3",
			button4: "map__button map__button--4",
			button5: "map__button map__button--5",
			button6: "map__button map__button--6",
			button7: "map__button map__button--7",
		})
	}

	clicked3 = () => {
		this.setState({
			button1: "map__button map__button--1",
			button2: "map__button map__button--2",
			button3: "map__button map__button--3 map__button--clicked",
			button4: "map__button map__button--4",
			button5: "map__button map__button--5",
			button6: "map__button map__button--6",
			button7: "map__button map__button--7",
		})
	}

	clicked4 = () => {
		this.setState({
			button1: "map__button map__button--1",
			button2: "map__button map__button--2",
			button3: "map__button map__button--3",
			button4: "map__button map__button--4 map__button--clicked",
			button5: "map__button map__button--5",
			button6: "map__button map__button--6",
			button7: "map__button map__button--7",
		})
	}

	clicked5 = () => {
		this.setState({
			button1: "map__button map__button--1",
			button2: "map__button map__button--2",
			button3: "map__button map__button--3",
			button4: "map__button map__button--4",
			button5: "map__button map__button--5 map__button--clicked",
			button6: "map__button map__button--6",
			button7: "map__button map__button--7",
		})
	}

	clicked6 = () => {
		this.setState({
			button1: "map__button map__button--1",
			button2: "map__button map__button--2",
			button3: "map__button map__button--3",
			button4: "map__button map__button--4",
			button5: "map__button map__button--5",
			button6: "map__button map__button--6 map__button--clicked",
			button7: "map__button map__button--7",
		})
	}

	clicked7 = () => {
		this.setState({
			button1: "map__button map__button--1",
			button2: "map__button map__button--2",
			button3: "map__button map__button--3",
			button4: "map__button map__button--4",
			button5: "map__button map__button--5",
			button6: "map__button map__button--6",
			button7: "map__button map__button--7 map__button--clicked",
		})
	}

	render() {
		return (
			<Fragment>
				<div className="map">
					<div className="map__container">
						<div className="map__heading">Now hiring in...</div>
						<div className="row">
							<div className="col-1-of-2">
								<img
									src={MapPhoto}
									alt="Map"
									className="map__photo"
								/>
							</div>
							<div className="col-1-of-2">
								<div className="map__button-container">
									<div
										className={this.state.button1}
										onClick={this.clicked1}
									>
										<div className="map__button-text">PA</div>
									</div>
									<div
										className={this.state.button2}
										onClick={this.clicked2}
									>
										<div className="map__button-text">OH</div>
									</div>
									<div
										className={this.state.button3}
										onClick={this.clicked3}
									>
										<div className="map__button-text">IN</div>
									</div>

									<div
										className={this.state.button4}
										onClick={this.clicked4}
									>
										<div className="map__button-text">PA</div>
									</div>
									<div
										className={this.state.button5}
										onClick={this.clicked5}
									>
										<div className="map__button-text">OH</div>
									</div>
									<div
										className={this.state.button6}
										onClick={this.clicked6}
									>
										<div className="map__button-text">IN</div>
									</div>

									<div
										className={this.state.button7}
										onClick={this.clicked7}
									>
										<div className="map__button-text">IN</div>
									</div>
								</div>
							</div>
						</div>
						<p className="map__paragraph">The Wright Team is 1,500+ Strong.</p>
						<p className="map__paragraph">Join the Wright Team Today.</p>
					</div>
				</div>
			</Fragment>
		)
	}
}