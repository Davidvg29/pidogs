import { useDispatch } from "react-redux"
import {searchInput} from "../../Redux/actions"

function Search() {
    const dispatch = useDispatch()

    const handlerSearchInput =(e)=>{
        dispatch(searchInput(e.target.value))
    }

    return(
        <div>
            <input onChange={handlerSearchInput} type="text" placeholder="ingresar raza"/>
           
        </div>
    )
}
export default Search