const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      users: [],
      userDetail: {},
      userProperties: {},
      planets: [],
      planetsDetail: {},
      planetsProperties: {},
      vehicles: [],
      vehiclesDetails: {},
      vehiclesProperties: {},
    },
    actions: {
      // Use getActions to call a function within a fuction
      getPeople: async () => {
        const url = "https://www.swapi.tech/api/people/";
        const options = {
          method: "GET",
        };
        const response = await fetch(url, options);
        if (response.ok) {
          const data = await response.json();
          let character = data.results;
          setStore({ users: character });
        } else {
          console.log("Error: ", response.status, response.statusText);
        }
      },
      getPeopleDetails: async (id) => {
        const url = "https://www.swapi.tech/api/people/" + id;
        const options = {
          method: "GET",
        };
        const response = await fetch(url, options);
        if (response.ok) {
          const data = await response.json();
          let character = data.result;
          setStore({ userDetail: character });
          let properties = data.result.properties;
          setStore({ userProperties: properties });
        } else {
          console.log("Error: ", response.status, response.statusText);
        }
      },
      getPlanets: async () => {
        const url = "https://www.swapi.tech/api/planets/";
        const options = {
          method: "GET",
        };
        const response = await fetch(url, options);
        if (response.ok) {
          const data = await response.json();
          let character = data.results;
          setStore({ planets: character });
        } else {
          console.log("Error: ", response.status, response.statusText);
        }
      },
      getPlanetsDetails: async (id) => {
        const url = "https://www.swapi.tech/api/planets/" + id;
        const options = {
          method: "GET",
        };
        const response = await fetch(url, options);
        if (response.ok) {
          const data = await response.json();
          let character = data.result;
          setStore({ planetsDetail: character });
          let properties = data.result.properties;
          setStore({ planetsProperties: properties });
        } else {
          console.log("Error: ", response.status, response.statusText);
        }
      },
      getVehicles: async () => {
        const url = "https://www.swapi.tech/api/Vehicles/";
        const options = {
          method: "GET",
        };
        const response = await fetch(url, options);
        if (response.ok) {
          const data = await response.json();
          let character = data.results;
          console.log(character);
          setStore({ vehicles: character });
        } else {
          console.log("Error: ", response.status, response.statusText);
        }
      },
      getVehiclesDetails: async (id) => {
        const url = "https://www.swapi.tech/api/Vehicles/" + id;
        const options = {
          method: "GET",
        };
        const response = await fetch(url, options);
        if (response.ok) {
          const data = await response.json();
          let character = data.result;
          setStore({ vehiclesDetail: character });
          let properties = data.result.properties;
          setStore({ vehiclesProperties: properties });
        } else {
          console.log("Error: ", response.status, response.statusText);
        }
      },
    },
  };
};

export default getState;
