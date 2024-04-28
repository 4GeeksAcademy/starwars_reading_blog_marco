const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			faveList: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			addToFavorites: (character) => {
                const store = getStore();
                setStore({ faveList: [...store.faveList, character] });
            },
			removeFromFavorites: (id) => {
                const store = getStore();
                const updatedFaveList = store.faveList.filter(character => character.id !== id);
                setStore({ faveList: updatedFaveList });
            },
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getCharacters: async () => {
				try {
					const charactersResp = await fetch ("https://www.swapi.tech/api/people")
					const charactersData = await charactersResp.json();
					setStore({characters: charactersData.results});
				} catch (error) {
					console.log("error fetching characters", error);
				}
				
			},
			getOneCharacter: async (id) => {
				try {
					const charactersResp = await fetch ("https://www.swapi.tech/api/people/"+id)
					const charactersData = await charactersResp.json();
					setStore({singleCharacter: charactersData.result});
				} catch (error) {
					console.log("error fetching characters", error);
				}
				
			},
			getPlanets: async () => {
				try {
					const planetsResp = await fetch("https://www.swapi.tech/api/planets");
					const planetsData = await planetsResp.json();
					setStore({ planets: planetsData.results });
				} catch (error) {
					console.log("Error fetching planets", error);
				}
			},
			
			getOnePlanet: async (id) => {
				try {
					const planetResp = await fetch(`https://www.swapi.tech/api/planets/${id}`);
					const planetData = await planetResp.json();
					setStore({ singlePlanet: planetData.result });
				} catch (error) {
					console.log("Error fetching planet", error);
				}
			},
			
			getStarships: async () => {
				try {
					const starshipsResp = await fetch("https://www.swapi.tech/api/starships");
					const starshipsData = await starshipsResp.json();
					setStore({ starships: starshipsData.results });
				} catch (error) {
					console.log("Error fetching starships", error);
				}
			},
			
			getOneStarship: async (id) => {
				try {
					const starshipResp = await fetch(`https://www.swapi.tech/api/starships/${id}`);
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
			}
		}
	};
};

export default getState;
