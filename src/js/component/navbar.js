import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store } = useContext(Context);

    return (
        <nav className="navbar navbar-light bg-light mb-3">
            <Link to="/">
                <span className="navbar-brand mb-0 h1">Back to Home</span>
            </Link>
            <div className="ml-auto">
                {/* Display the favorite list */}
                <div className="dropdown ml-2">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Favorites <span className="badge badge-pill badge-info">{store.faveList.length}</span>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {store.faveList.map((character, index) => (
                            <a key={index} className="dropdown-item" href="#">{character.name}</a>
                        ))}
                        {/* Display a message if the favorite list is empty */}
                        {store.faveList.length === 0 && (
                            <p className="dropdown-item text-muted">No favorites yet</p>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};