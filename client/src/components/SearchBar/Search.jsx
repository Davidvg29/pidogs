import { useDispatch } from "react-redux"
import {searchInput} from "../../Redux/actions"
import css from "./Search.module.css"
function Search() {
    const dispatch = useDispatch()

    const handlerSearchInput =(e)=>{
        dispatch(searchInput(e.target.value))
    }

    return(
        <div className={css.Search}>
            <input onChange={handlerSearchInput} type="text" placeholder="buscar raza"/>
           
        </div>
    )
}
export default Search