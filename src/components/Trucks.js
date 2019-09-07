import React from 'react'

export default function Trucks() {
    return (
        <div className="trucks">
            <h1 className="trucks__heading trucks__heading--1">Trucks are high-tech!</h1>
            <div className="trucks__photos">
                <div className="trucks__photo-1"></div>
                <div className="trucks__photo-2"></div>
                <div className="trucks__photo-3"></div>
            </div>
            <h3 className="trucks__heading trucks__heading--2">Have you seen the Wright trucks? You’ll love to drive the new Silverado double cab which features all kinds of upgrades.</h3>
            <ul className="trucks__list">
                <div>
                    <li>Front and rear parking assist with audible sensors</li>
                    <li>Lane change with side blind zone alert</li>
                    <li>Audible blind zone alert</li>
                    <li>Rear traffic audible alert</li>
                </div>
                
            </ul>
            <div className="trucks__safety">
                <h3 className="trucks__heading trucks__heading--5">Safety is the goal!</h3>
                <p className="trucks__paragraph">Each unit also has reflective material on hood and back end of the truck, halogen daytime running lights for greater visibility plus speed limit controls.</p>
                <p className="trucks__paragraph">Plus all the standard features: airbags, rear back-up camera, power-heated outside mirrors.</p>
            </div>
            <h3 className="trucks__heading trucks__heading--3">You can earn the right to be a WRIGHT crew leader and drive this truck home at night.</h3>
            <div className="trucks__divider"></div>
            <h3 className="trucks__heading trucks__heading--4">Plus earn safe driver bonus rewards—up to $650 a year.  Real money!!</h3>
            <div className="trucks__bottom"></div>
        </div>
    )
}
