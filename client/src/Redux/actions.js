import axios from "axios"
import { ADD_DOGS, ORDER, CAMBIAR_ORIGEN, ADD_TEMPERAMENTS, ORDER_TEMPERAMENTS, SEARCH_INPUT } from "./action-types";

export const addDogs = (traerdatos, stateSearchInput) => async (dispatch) => {
  // console.log(traerdatos)
  let url = ""
  
  if(stateSearchInput.length===0){
    
    if(traerdatos==="api"){ url="http://localhost:3001/dogs"}
    else{url ="http://localhost:3001/dogsdatabase"}
  }
  else{ url = `http://localhost:3001/name?name=${stateSearchInput}`}
  


    try {
      const { data } = await axios.get(url);
      return  dispatch({
        type: ADD_DOGS,
        payload: data,
      });
    } catch (error) {
      console.error("Error en archivo action, función addDogs:", error.message);
    }
  };

export const order = (order)=>{
  return {
    type: ORDER,
    payload: order
  }
}

export const cambiarOrigen = (traerDatosDe)=>{
  return {
    type: CAMBIAR_ORIGEN,
    payload: traerDatosDe
  }
}

export const addTemperaments = ()=>async(dispatch)=>{

  try {
    const {data} = await axios.get("http://localhost:3001/temperaments")

    return dispatch({
      type: ADD_TEMPERAMENTS,
      payload: data
    })
  } catch (error) {
    console.log("ocurrio un error al obtener temperamentos ", error.message)
  }
}

export let orderTemperaments=(orderValue)=>{
  return {
    type: ORDER_TEMPERAMENTS,
    payload : orderValue
  }
}

export const searchInput = (search)=>{
  return {
    type: SEARCH_INPUT,
    payload: search
  }
}