import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  const removeFromFavorites = (uid) => {
    actions.removeFromFavorites(uid);
  };

  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">Back to Home</span>
      </Link>
      <div className="ml-auto">
        {/* Display the favorite list */}
        <div className="dropdown ml-2" style={{ margin: "0 40px" }}>
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Favorites{" "}
            <span className="badge badge-pill badge-info">
              {store.faveList.length}
            </span>
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {store.faveList.map((item, index) => (
              <div
                key={index}
                className="d-flex justify-content-between align-items-center"
              >
                <Link
                  to={`/${item.type}/${item.uid}`}
                  className="dropdown-item"
                >
                  {item.properties.name}
                </Link>
                <i
                  className="fas fa-trash-alt"
                  onClick={() => removeFromFavorites(item.uid, item.type)}
                ></i>
              </div>
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
