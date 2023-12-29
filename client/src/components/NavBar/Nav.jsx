import Search from "../SearchBar/Search"
import {order, cambiarOrigen, orderTemperaments} from "../../Redux/actions"
import { useDispatch } from "react-redux"
import {Link} from "react-router-dom"

function Nav({temperaments}) {
    const dispatch = useDispatch()

    const orderDogs = (e)=>{
        dispatch(order(e.target.value))
    }
    
    const traerDatosDe =(e)=>{
        dispatch(cambiarOrigen(e.target.value))
    }

    const filterTemperaments =(e)=>{
        dispatch(orderTemperaments(e.target.value))
    }

    return(
        <div>
            <Search/>
            <label>Traer datos de: </label>
                <select id="" onChange={traerDatosDe}>
                    <option value="api">Api dogs</option>
                    <option value="dataBase">Database</option>
                </select>
                <label>Ordenar por: </label>
                <select  onChange={orderDogs} name="" id="">
                    <option value="ascendente">Ascendente</option>
                    <option value="descendente">Descendente</option>
                </select>
                <label>filtrar por temperamentos: </label>
            <select name="" id="" onChange={filterTemperaments}>
                <option value="all">todos</option>
                {
                temperaments.length>0?
                temperaments.map((temperament)=>(
                    <option key={temperament} value={temperament}>{temperament}</option>
                )):
                <option>cargando...</option>
                }
            </select>
            <Link to="/form">agregar nueva raza</Link>
        </div>
    )
}
export default Nav