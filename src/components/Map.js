import React, { Component, Fragment } from 'react';

import MapOriginal from '../assets/Maps/map.png';
import MapPA from '../assets/Maps/map-pa.png';
import MapOH from '../assets/Maps/map-oh.png';
import MapIN from '../assets/Maps/map-in.png';
import MapMD from '../assets/Maps/map-md.png';
import MapNC from '../assets/Maps/map-nc.png';
import MapSC from '../assets/Maps/map-sc.png';
import MapFL from '../assets/Maps/map-fl.png';

import MapOriginal1x from '../assets/Maps/Small/map-1x.png';
import MapPA1x from '../assets/Maps/Small/map-pa-1x.png';
import MapOH1x from '../assets/Maps/Small/map-oh-1x.png';
import MapIN1x from '../assets/Maps/Small/map-in-1x.png';
import MapMD1x from '../assets/Maps/Small/map-md-1x.png';
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
		state: '',
		city: ''
	}

	// Map Event Handlers
	handleMapOriginal = () => {
		this.setState({
			map: MapOriginal,
			mapSmall: MapOriginal1x,
			state: '',
			city: ''
		})
	}

	handleMapPA = () => {
		this.setState({
			map: MapPA,
			mapSmall: MapPA1x,
			state: 'Pennsylvania',
			city: 'Beaver Falls, Greensburg, Washington, York, Quakertown'
		})
	}

	handleMapOH = () => {
		this.setState({
			map: MapOH,
			mapSmall: MapOH1x,
			state: 'Ohio',
			city: 'Medina, Cincinnati, Columbus, Bowling Green'
		})
	}

	handleMapIN = () => {
		this.setState({
			map: MapIN,
			mapSmall: MapIN1x,
			state: 'Indiana',
			city: 'Indianapolis, Garden City'
		})
	}

	handleMapMD = () => {
		this.setState({
			map: MapMD,
			mapSmall: MapMD1x
		})
	}

	handleMapNC = () => {
		this.setState({
			map: MapNC,
			mapSmall: MapNC1x,
			state: 'North Carolina',
			city: 'Raleigh/Durham, Winston-Salem, Charlotte, Asheville'
		})
	}

	handleMapSC = () => {
		this.setState({
			map: MapSC,
			mapSmall: MapSC1x,
			state: 'South Carolina',
			city: 'Florence, Greenville'
		})
	}

	handleMapFL = () => {
		this.setState({
			map: MapFL,
			mapSmall: MapFL1x,
			state: 'Florida',
			city: 'Haines City'
		})
	}
	
	render() {
		return (
			<Fragment>
				<div className="map">
					<div className="map__container">
						<h1 className="map__heading">{this.props.mapHeading}</h1>
						<div className="row">
							<div className="col-1-of-2">
								<img
									srcSet={`${this.state.mapSmall} 350w, ${this.state.map} 700w`}
									sizes="(max-width: 75em) 31vw, (max-width: 56.25em) 31vw, (max-width: 37.5em) 41vw, 490px"
									alt="Map"
									className="map__photo"
									src={this.state.mapSmall}
								/>
								<p className="map__offices-state">{this.state.state}</p>
								<p className="map__offices-city">{this.state.city}</p>
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
										onClick={this.handleMapMD}
										onMouseEnter={this.handleMapMD}
										onMouseLeave={this.handleMapOriginal}
									>
										<div className="map__button-text">MD</div>
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
						<p className="map__paragraph">{this.props.mapParagraph1}</p>
						<p className="map__paragraph">{this.props.mapParagraph2}</p>
					</div>
				</div>
			</Fragment>
		)
	}
}