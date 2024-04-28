import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
    const { store, actions } = useContext(Context);
    const { theid } = useParams();

    useEffect(() => {
        actions.getOneCharacter(theid);
    }, []);

    console.log(theid);
    return (
        <div className="container">
            <div className="card d-flex flex-column flex-md-row">
                {/* Image on the left */}
                <div className="col-md-4">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${theid}.jpg`} className="img-fluid" alt="Character" />
                </div>
                {/* Title and lorem ipsum on the right */}
                <div className="col-md-8">
                    <div className="card-body">
                        <h1 className="card-title">{store.singleCharacter?.properties?.name}</h1>
                        <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit, libero ut fringilla pretium, sem ex vestibulum arcu, in viverra dolor ex sed ex. Cras efficitur risus sit amet metus varius, eget vehicula lectus facilisis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed faucibus auctor ante, nec egestas eros cursus vel. Donec vehicula eget ex at aliquam. Nam id nisi ut dolor consectetur volutpat. Phasellus consequat, arcu at consectetur pellentesque, massa turpis sollicitudin metus, a vestibulum risus nunc vel lorem. Sed eu felis eget lectus suscipit tincidunt. Nullam eget lectus non dolor tincidunt eleifend. Curabitur commodo ex a est vehicula, nec tincidunt ligula interdum.
                        </p>
                    </div>
                </div>
            </div>
            {/* Line break */}
            <hr />
            {/* Properties */}
            <div className="d-flex flex-wrap">
                <div className="flex-grow-1 col-md-2">
                    <div>Birth Year</div>
                    <div>{store.singleCharacter?.properties?.birth_year}</div>
                </div>
                <div className="flex-grow-1 col-md-2">
                    <div>Gender</div>
                    <div>{store.singleCharacter?.properties?.gender}</div>
                </div>
                <div className="flex-grow-1 col-md-2">
                    <div>Height</div>
                    <div>{store.singleCharacter?.properties?.height}</div>
                </div>
                <div className="flex-grow-1 col-md-2">
                    <div>Skin Color</div>
                    <div>{store.singleCharacter?.properties?.skin_color}</div>
                </div>
                <div className="flex-grow-1 col-md-2">
                    <div>Hair Color</div>
                    <div>{store.singleCharacter?.properties?.hair_color}</div>
                </div>
                <div className="flex-grow-1 col-md-2">
                    <div>Eye Color</div>
                    <div>{store.singleCharacter?.properties?.eye_color}</div>
                </div>
            </div>
        </div>
    );
};

Single.propTypes = {
    match: PropTypes.object
};