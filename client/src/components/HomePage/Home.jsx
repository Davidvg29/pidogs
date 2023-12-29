import Cards from "../Cards/Cards"
import Nav from "../NavBar/Nav"

import {useSelector, useDispatch} from "react-redux"
import { useEffect } from "react";
import { addDogs, addTemperaments } from "../../Redux/actions";

function Home() {

    const dogs = useSelector((state)=>state.dogs);
    const traerDatosDe = useSelector((state)=>state.traerDatos)
    const temperaments = useSelector((state)=>state.temperaments)
    const stateSearchInput = useSelector((state)=>state.searchInput)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(addDogs(traerDatosDe, stateSearchInput))
        dispatch(addTemperaments())
    },[dispatch, traerDatosDe, stateSearchInput])
    
    return(
        <div>
            component home
            <Nav temperaments={temperaments}/>
            <Cards dogs={dogs}/>
            
        </div>
    )
}

export default Home