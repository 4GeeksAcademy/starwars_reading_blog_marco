import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
    const { store, actions } = useContext(Context);

    const addToFavorites = (character) => {
        actions.addToFavorites(character);
        console.log("Favorites List:", store.faveList);
    };

    return (
        <div className="container mt-5">
            <div className="card-container d-flex flex-nowrap overflow-auto">
                {store.characters &&
                    store.characters.map((el) => (
                        <div key={el.uid} className="card mx-3" style={{ minWidth: "300px" }}>
                            <img
                                src={`https://starwars-visualguide.com/assets/img/characters/${el.uid}.jpg`}
                                className="card-img-top"
                                alt={el.name}
                            />
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <div>
                                    <h5 className="card-title">{el.name}</h5>
                                    <Link to={`/single/${el.uid}`} className="btn btn-primary">
                                        Learn more!
                                    </Link>
                                </div>
                                <div>
                                    <button className="btn btn-outline-danger" onClick={() => addToFavorites(el)}>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
            <div className="card-container d-flex flex-nowrap overflow-auto">
                {store.planets &&
                    store.planets.map((el) => (
                        <div key={el.uid} className="card mx-3" style={{ minWidth: "300px" }}>
                            <img
                                src={`https://starwars-visualguide.com/assets/img/planets/${el.uid}.jpg`}
                                className="card-img-top"
                                alt={el.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{el.name}</h5>
                                <Link to={`/planet/${el.uid}`} className="btn btn-primary">
                                    Learn more!
                                </Link>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};