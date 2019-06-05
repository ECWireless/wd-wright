import React, { Component, Fragment } from 'react';

import MapOriginal from '../assets/map.png';
import MapPA from '../assets/map-pa.png';
import MapOH from '../assets/map-oh.png';
import MapIN from '../assets/map-in.png';
import MapNY from '../assets/map-ny.png';
import MapNC from '../assets/map-nc.png';
import MapSC from '../assets/map-sc.png';
import MapFL from '../assets/map-fl.png';

export default class Map extends Component {
	state = {
		button1: "map__button map__button--1",
		button2: "map__button map__button--2",
		button3: "map__button map__button--3",
		button4: "map__button map__button--4",
		button5: "map__button map__button--5",
		button6: "map__button map__button--6",
		button7: "map__button map__button--7",

		map: MapOriginal,
	}

	// Map Event Handlers
	handleMapOriginal = () => {
		this.setState({
			map: MapOriginal,
		})
	}

	handleMapPA = () => {
		this.setState({
			map: MapPA,
		})
	}

	handleMapOH = () => {
		this.setState({
			map: MapOH,
		})
	}

	handleMapIN = () => {
		this.setState({
			map: MapIN,
		})
	}

	handleMapNY = () => {
		this.setState({
			map: MapNY,
		})
	}

	handleMapNC = () => {
		this.setState({
			map: MapNC,
		})
	}

	handleMapSC = () => {
		this.setState({
			map: MapSC,
		})
	}

	handleMapFL = () => {
		this.setState({
			map: MapFL,
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
									src={this.state.map}
									alt="Map"
									className="map__photo"
								/>
							</div>
							<div className="col-1-of-2">
								<div className="map__button-container">
									<div
										className="map__button map__button--1"
										onClick={this.handleMapPA}
										onMouseEnter={this.handleMapPA}
										onMouseLeave={this.handleMapOriginal}
									>
										<div className="map__button-text">PA</div>
									</div>
									<div
										className="map__button map__button--2"
										onClick={this.handleMapOH}
										onMouseEnter={this.handleMapOH}
										onMouseLeave={this.handleMapOriginal}
									>
										<div className="map__button-text">OH</div>
									</div>
									<div
										className="map__button map__button--3"
										onClick={this.handleMapIN}
										onMouseEnter={this.handleMapIN}
										onMouseLeave={this.handleMapOriginal}
									>
										<div className="map__button-text">IN</div>
									</div>

									<div
										className="map__button map__button--4"
										onClick={this.handleMapNY}
										onMouseEnter={this.handleMapNY}
										onMouseLeave={this.handleMapOriginal}
									>
										<div className="map__button-text">NY</div>
									</div>
									<div
										className="map__button map__button--5"
										onClick={this.handleMapNC}
										onMouseEnter={this.handleMapNC}
										onMouseLeave={this.handleMapOriginal}
									>
										<div className="map__button-text">NC</div>
									</div>
									<div
										className="map__button map__button--6"
										onClick={this.handleMapSC}
										onMouseEnter={this.handleMapSC}
										onMouseLeave={this.handleMapOriginal}
									>
										<div className="map__button-text">SC</div>
									</div>

									<div
										className="map__button map__button--7"
										onClick={this.handleMapFL}
										onMouseEnter={this.handleMapFL}
										onMouseLeave={this.handleMapOriginal}
									>
										<div className="map__button-text">FL</div>
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