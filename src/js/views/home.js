import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  if (store.isLoading) {
    return <div>Loading...</div>;  // Replace this with your loading icon
}

  const addToFavorites = (item, type) => {
    // Add the type to the item
    item.type = type;
  
    actions.addToFavorites(item);
    console.log("Favorites List:", store.faveList);
  };

  return (
    <div className="container mt-5">
      <div className="card-container d-flex flex-nowrap overflow-auto">
        {store.characters &&
          store.characters.map((el) => {
            // const { height, mass, hair_color, name } = el;
            return (
              <div
                key={el.uid}
                className="card mx-3"
                style={{ minWidth: "300px" }}
              >
                <img
                  src={`https://starwars-visualguide.com/assets/img/characters/${el.uid}.jpg`}
                  className="card-img-top"
                  alt={el.name}
                />
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="card-title">{el?.properties?.name}</h5>
                    <p>Height: {el?.properties?.height}</p>
                    <p>Mass: {el?.properties?.mass}</p>
                    <p>Hair Color: {el?.properties?.hair_color}</p>
                    <Link to={`/single/${el.uid}`} className="btn btn-primary">
                      Learn more!
                    </Link>
                  </div>
                  <div>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => addToFavorites(el, 'character')}
                    >
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="container mt-5">
        <div className="card-container d-flex flex-nowrap overflow-auto">
          {store.planets &&
            store.planets.map((el) => {
              return (
                <div
                  key={el.uid}
                  className="card mx-3"
                  style={{ minWidth: "300px" }}
                >
                  <img
                    src={`https://starwars-visualguide.com/assets/img/planets/${el.uid}.jpg`}
                    className="card-img-top"
                    alt={el.name}
                  />
                  <div className="card-body d-flex justify-content-between align-items-center">
                    <div>
                      <h5 className="card-title">{el?.properties?.name}</h5>
                      <p>Diameter: {el?.properties?.diameter}</p>
                      <p>Climate: {el?.properties?.climate}</p>
                      <p>Population: {el?.properties?.population}</p>
                      <Link
                        to={`/single/${el.uid}`}
                        className="btn btn-primary"
                      >
                        Learn more!
                      </Link>
                    </div>
                    <div>
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => addToFavorites(el, 'planet')}
                      >
                        <FontAwesomeIcon icon={faHeart} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="container mt-5">
  <div className="card-container d-flex flex-nowrap overflow-auto">
    {store.starships &&
      store.starships.map((el) => {
        return (
          <div
            key={el.uid}
            className="card mx-3"
            style={{ minWidth: "18rem" }}
          >
            <img
              src={`https://starwars-visualguide.com/assets/img/starships/${el.uid}.jpg`}
              className="card-img-top"
              alt={el.name}
            />
            <div className="card-body">
              <h5 className="card-title">{el?.properties?.name}</h5>
              <p>Model: {el?.properties?.model}</p>
              <p>Manufacturer: {el?.properties?.manufacturer}</p>
              <p>Cost: {el?.properties?.cost_in_credits}</p>
              <Link
                to={`/single/${el.uid}`}
                className="btn btn-primary"
              >
                Learn more!
              </Link>
              <button
                className="btn btn-outline-danger"
                onClick={() => addToFavorites(el, 'starship')}
              >
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </div>
          </div>
        );
      })}
  </div>
</div>
    </div>
  );
};
