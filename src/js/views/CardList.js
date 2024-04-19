import React from "react";
import { Link } from "react-router-dom";

const CardList = ({ data }) => {
    return (
        <div className="container mt-5">
            <div className="card-container d-flex flex-nowrap overflow-auto">
                {data &&
                    data.map((item) => (
                        <div key={item.uid} className="card mx-3" style={{ minWidth: "300px" }}>
                            <img
                                src={`https://starwars-visualguide.com/assets/img/${item.category}/${item.uid}.jpg`}
                                className="card-img-top"
                                alt={item.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <Link to={`/single/${item.category}/${item.uid}`} className="btn btn-primary">
                                    Learn more!
                                </Link>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default CardList;