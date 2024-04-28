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
				const faveList = store.faveList || []; // If store.faveList is undefined or null, default to an empty array
				
				// Check if the character already exists in the favorites list
				const isCharacterInFavorites = faveList.some((favCharacter) => favCharacter.uid === character.uid);
			
				if (!isCharacterInFavorites) {
					// If the character is not already in the favorites list, add it
					setStore({ faveList: [...faveList, character] });
				} else {
					// If the character is already in the favorites list, you may want to show a message or handle it differently
					console.log('Character is already in favorites list');
				}
			},
			removeFromFavorites: (uid) => {
				const store = getStore();
				
				// Log store before updating faveList
				console.log('Store before update:', store);
				
				const updatedFaveList = store.faveList.filter(character => character.uid !== uid);
				
				// Log updated favorite list before setting it in the store
				console.log('Updated favorite list:', updatedFaveList);
				
				setStore({ faveList: updatedFaveList });
				
				// Log store after updating faveList
				console.log('Store after update:', getStore());
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
