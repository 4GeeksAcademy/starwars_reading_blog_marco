import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Planet = () => {
    const { store, actions } = useContext(Context);
    const { theid } = useParams();

    useEffect(() => {
        actions.getOnePlanet(theid);
    }, []);

    const keyMapping = {
        diameter: "Diameter",
        rotation_period: "Rotation Period",
        orbital_period: "Orbital Period",
        gravity: "Gravity",
        population: "Population",
        climate: "Climate"
    };

    return (
        <div className="container">
            <div className="card d-flex flex-column flex-md-row">
                <div className="col-md-4">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${theid}.jpg`} className="img-fluid" alt="Planet" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h1 className="card-title">{store.singlePlanet?.properties?.name}</h1>
                        <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit, libero ut fringilla pretium, sem ex vestibulum arcu, in viverra dolor ex sed ex. Cras efficitur risus sit amet metus varius, eget vehicula lectus facilisis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed faucibus auctor ante, nec egestas eros cursus vel. Donec vehicula eget ex at aliquam. Nam id nisi ut dolor consectetur volutpat. Phasellus consequat, arcu at consectetur pellentesque, massa turpis sollicitudin metus, a vestibulum risus nunc vel lorem. Sed eu felis eget lectus suscipit tincidunt. Nullam eget lectus non dolor tincidunt eleifend. Curabitur commodo ex a est vehicula, nec tincidunt ligula interdum.
                        </p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="d-flex flex-wrap">
                {Object.entries(store.singlePlanet?.properties || {})
                    .filter(([key]) => keyMapping.hasOwnProperty(key))
                    .map(([key, value]) => (
                        <div key={key} className="flex-grow-1 col-md-2">
                            <div>{keyMapping[key]}</div>
                            <div>{value}</div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

Planet.propTypes = {
    match: PropTypes.object
};