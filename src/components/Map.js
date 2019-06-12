import React, { Component, Fragment } from 'react';

import MapOriginal from '../assets/Maps/map.png';
import MapPA from '../assets/Maps/map-pa.png';
import MapOH from '../assets/Maps/map-oh.png';
import MapIN from '../assets/Maps/map-in.png';
import MapNY from '../assets/Maps/map-ny.png';
import MapNC from '../assets/Maps/map-nc.png';
import MapSC from '../assets/Maps/map-sc.png';
import MapFL from '../assets/Maps/map-fl.png';

import MapOriginal1x from '../assets/Maps/Small/map-1x.png';
import MapPA1x from '../assets/Maps/Small/map-pa-1x.png';
import MapOH1x from '../assets/Maps/Small/map-oh-1x.png';
import MapIN1x from '../assets/Maps/Small/map-in-1x.png';
import MapNY1x from '../assets/Maps/Small/map-ny-1x.png';
import MapNC1x from '../assets/Maps/Small/map-nc-1x.png';
import MapSC1x from '../assets/Maps/Small/map-sc-1x.png';
import MapFL1x from '../assets/Maps/Small/map-fl-1x.png';

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
		mapSmall: MapOriginal1x,
	}

	// Map Event Handlers
	handleMapOriginal = () => {
		this.setState({
			map: MapOriginal,
			mapSmall: MapOriginal1x,
		})
	}

	handleMapPA = () => {
		this.setState({
			map: MapPA,
			mapSmall: MapPA1x,
		})
	}

	handleMapOH = () => {
		this.setState({
			map: MapOH,
			mapSmall: MapOH1x,
		})
	}

	handleMapIN = () => {
		this.setState({
			map: MapIN,
			mapSmall: MapIN1x,
		})
	}

	handleMapNY = () => {
		this.setState({
			map: MapNY,
			mapSmall: MapNY1x,
		})
	}

	handleMapNC = () => {
		this.setState({
			map: MapNC,
			mapSmall: MapNC1x,
		})
	}

	handleMapSC = () => {
		this.setState({
			map: MapSC,
			mapSmall: MapSC1x,
		})
	}

	handleMapFL = () => {
		this.setState({
			map: MapFL,
			mapSmall: MapFL1x,
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
									srcSet={`${this.state.mapSmall} 1x, ${this.state.map} 2x`}
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