const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      faveList: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      addToFavorites: (character) => {
        const store = getStore();
        const faveList = store.faveList || []; // If store.faveList is undefined or null, default to an empty array

        // Check if the character already exists in the favorites list
        const isCharacterInFavorites = faveList.some(
          (favCharacter) => favCharacter.uid === character.uid
        );

        if (!isCharacterInFavorites) {
          // If the character is not already in the favorites list, add it
          setStore({ faveList: [...faveList, character] });
        } else {
          // If the character is already in the favorites list, you may want to show a message or handle it differently
          console.log("Character is already in favorites list");
        }
      },
      addToFavorites: (planet) => {
        const store = getStore();
        const faveList = store.faveList || []; // Si store.faveList es undefined o null, se usa un array vacío

        // Comprueba si el planeta ya existe en la lista de favoritos
        const isPlanetInFavorites = faveList.some(
          (favPlanet) => favPlanet.uid === planet.uid
        );

        if (!isPlanetInFavorites) {
          // Si el planeta no está ya en la lista de favoritos, se añade
          setStore({ faveList: [...faveList, planet] });
        } else {
          // Si el planeta ya está en la lista de favoritos, puedes mostrar un mensaje o manejarlo de otra manera
          console.log("El planeta ya está en la lista de favoritos");
        }
      },
      removeFromFavorites: (uid, type) => {
        const store = getStore();

        // Filtra la lista de favoritos para eliminar el elemento con el uid dado
        const updatedFaveList = store.faveList.filter(
          (item) => item.uid !== uid || item.type !== type
        );

        // Actualiza la tienda con la nueva lista de favoritos
        setStore({ faveList: updatedFaveList });
      },
      removeFromFavorites: (uid) => {
        const store = getStore();

        // Remove the character with the given uid from the favorites list
        const updatedFaveList = store.faveList.filter(
          (character) => character.uid !== uid
        );

        // Update the store with the new favorites list
        setStore({ faveList: updatedFaveList });
      },
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      getCharacters: async () => {
        try {
          const charactersResp = await fetch(
            "https://www.swapi.tech/api/people"
          );
          const charactersData = await charactersResp.json();

          const detailedCharacters = await Promise.all(
            charactersData.results.map(async (character) => {
              const detailsResp = await fetch(character.url);
              const detailsData = await detailsResp.json();
              return detailsData.result;
            })
          );

          setStore({ characters: detailedCharacters });
        } catch (error) {
          console.log("error fetching characters", error);
        }
      },
      getOneCharacter: async (id) => {
        try {
          const charactersResp = await fetch(
            "https://www.swapi.tech/api/people/" + id
          );
          const charactersData = await charactersResp.json();
          setStore({ singleCharacter: charactersData.result });
        } catch (error) {
          console.log("error fetching characters", error);
        }
      },
      getPlanets: async () => {
        try {
          const planetsResp = await fetch("https://www.swapi.tech/api/planets");
          const planetsData = await planetsResp.json();

          const detailedPlanets = await Promise.all(
            planetsData.results.map(async (planet) => {
              const detailsResp = await fetch(planet.url);
              const detailsData = await detailsResp.json();
              return detailsData.result;
            })
          );

          setStore({ planets: detailedPlanets });
        } catch (error) {
          console.log("error fetching planets", error);
        }
      },
      getOnePlanet: async (id) => {
        try {
          const planetResp = await fetch(
            `https://www.swapi.tech/api/planets/${id}`
          );
          const planetData = await planetResp.json();
          setStore({ singlePlanet: planetData.result });
        } catch (error) {
          console.log("Error fetching planet", error);
        }
      },

      getStarships: async () => {
        try {
          const starshipsResp = await fetch(
            "https://www.swapi.tech/api/starships"
          );
          const starshipsData = await starshipsResp.json();

          const detailedStarships = await Promise.all(
            starshipsData.results.map(async (starship) => {
              const detailsResp = await fetch(starship.url);
              const detailsData = await detailsResp.json();
              return detailsData.result;
            })
          );

          setStore({ starships: detailedStarships });
        } catch (error) {
          console.log("error fetching starships", error);
        }
      },

      getOneStarship: async (id) => {
        try {
          const starshipResp = await fetch(
            `https://www.swapi.tech/api/starships/${id}`
          );
          const starshipData = await starshipResp.json();
          setStore({ singleStarship: starshipData.result });
        } catch (error) {
          console.log("Error fetching starship", error);
        }
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
