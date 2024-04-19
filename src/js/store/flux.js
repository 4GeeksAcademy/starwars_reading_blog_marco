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
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
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
