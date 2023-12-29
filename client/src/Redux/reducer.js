import { ADD_DOGS, ORDER, CAMBIAR_ORIGEN, ADD_TEMPERAMENTS, ORDER_TEMPERAMENTS, SEARCH_INPUT } from "./action-types";

const initialState = {
    dogs: [],
    temperaments: [],
    traerDatos: "api",
    searchInput: ""
}

const rootReducer = (state = initialState, {type, payload})=>{
    
    
    switch (type) {
        case ADD_DOGS:
            return {...state, dogs: payload}

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
            //  console.log(payload)
             const copia = [...state.dogs]
              console.log(copia)
              console.log(state.dogs)

              if (payload === 'all') {
                return {
                  ...state,
                  dogs: copia,
                };
              }

            let filtrar = copia.filter((dog)=>{
                const a = dog.temperament
                return a&&a.includes(payload)
            })

             return{
                 ...state,
                 dogs: filtrar
             }
            
             case SEARCH_INPUT:
                 return{
                     ...state, searchInput:payload
                 }


        default:
            return {...state}
    }
}
export default rootReducer