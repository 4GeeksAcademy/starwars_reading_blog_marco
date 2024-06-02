import React, { useState, useEffect } from "react";
import getState from "./flux.js";

export const Context = React.createContext(null);

const injectContext = (PassedComponent) => {
  const StoreWrapper = (props) => {
    const [state, setState] = useState(
      getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: (updatedStore) =>
          setState({
            store: Object.assign(state.store, updatedStore),
            actions: state.actions,
            isLoading: state.isLoading,
          }),
      })
    );

    useEffect(() => {
      // Set isLoading to true before starting the fetch
      setState((prevState) => ({ ...prevState, isLoading: true }));

      Promise.all([
        state.actions.getCharacters(),
        state.actions.getPlanets(),
        state.actions.getStarships(),
      ]).then(() => {
        // Set isLoading to false after all fetches are complete
        setState((prevState) => ({ ...prevState, isLoading: false }));
      });
    }, []);

    return (
      <Context.Provider value={state}>
        <PassedComponent {...props} />
      </Context.Provider>
    );
  };
  return StoreWrapper;
};

export default injectContext;
