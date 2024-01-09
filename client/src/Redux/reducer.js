import { ADD_DOGS, ORDER, CAMBIAR_ORIGEN, ADD_TEMPERAMENTS, ORDER_TEMPERAMENTS, SEARCH_INPUT } from "./action-types";

let initialState = {
    dogs: [],
    sinFiltroDogs: [],
    temperaments: [],
    traerDatos: "api",
    searchInput: ""
}

const rootReducer = (state = initialState, {type, payload})=>{
    
    
    switch (type) {
        case ADD_DOGS:
            return {...state, dogs: payload, sinFiltroDogs: payload}

        case ORDER:
            const copiaState = [...state.dogs]
            return {
                ...state,
                dogs: copiaState.sort((a, b) => {
                  return payload === "ascendente" ? a.name.localeCompare(b.name): b.name.localeCompare(a.name);
                })
              };
        
        case CAMBIAR_ORIGEN:
            return {...state, traerDatos: payload}

        case ADD_TEMPERAMENTS:
            return {...state, temperaments: payload}

        case ORDER_TEMPERAMENTS:
            const dogsCopia = [...state.sinFiltroDogs];
      let filtro = dogsCopia;

      if (payload !== "all") {
        filtro = dogsCopia.filter((dog) => dog.temperament && dog.temperament.includes(payload));
      }

      return {
        ...state,
        dogs: filtro
      };
            
             case SEARCH_INPUT:
                 return{
                     ...state, searchInput:payload
                 }


        default:
            return {...state}
    }
}
export default rootReducer