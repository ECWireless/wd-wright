import React from 'react'

export default function Trucks(props) {
    return (
        <div className="trucks">
            <h1 className="trucks__heading trucks__heading--1">{props.trucksHeading1}</h1>
            <div className="trucks__photos">
                <div alt="Side angle of Wright truck" className="trucks__photo-1"></div>
                <div alt="Back angle of Wright truck" className="trucks__photo-2"></div>
                <div alt="Front angle of Wright truck" className="trucks__photo-3"></div>
            </div>
            <h3 className="trucks__heading trucks__heading--2">{props.trucksHeading2}</h3>
            <ul className="trucks__list">
                <li className="trucks__list-item-1">{props.trucksListItem1}</li>
                <li className="trucks__list-item-2">{props.trucksListItem2}</li>
                <li className="trucks__list-item-3">{props.trucksListItem3}</li>
                <li className="trucks__list-item-4">{props.trucksListItem4}</li>
                
            </ul>
            <div className="trucks__safety">
                <h3 className="trucks__heading trucks__heading--5">{props.trucksHeading5}</h3>
                <p className="trucks__paragraph">{props.trucksParagraph1}</p>
                <p className="trucks__paragraph">{props.trucksParagraph2}</p>
            </div>
            <h3 className="trucks__heading trucks__heading--3">{props.trucksHeading3}</h3>
            <h3 className="trucks__heading trucks__heading--6">{props.trucksHeading6}</h3>
            <div className="trucks__divider"></div>
            <h3 className="trucks__heading trucks__heading--4">{props.trucksHeading4}</h3>
            <div className="trucks__bottom"></div>
        </div>
    )
}
