import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import validation from "../../utils/validation"
import axios from "axios"
import css from "./FormPage.module.css"
import Header from "../Header/Header"

const Form =()=>{
    const temperaments = useSelector((state)=>state.temperaments)
    const [selectTemperaments, setSelectTemperaments] = useState("")
    const [idTemperaments, setIdTemperaments] = useState()

    const [dogData, setDogData] = useState({
        name: "",
        image:"",
        height:"",
        weigth:"",
        life_span:"",
        temperament: ""
    })
    const[error, setError] = useState({
        name: "",
        image:"",
        height:"",
        weigth:"",
        life_span:"",
        temperament: ""
    })

    const handleDogData = (e)=>{
            setDogData({
                ...dogData, [e.target.name]: e.target.value})
            setError(
              validation({
              ...dogData, [e.target.name]: e.target.value
              }))
    }
    const sendForm = async (e)=>{
      e.preventDefault()
        if (Object.values(error).length === 0) {
        console.log(dogData)
        try {
          const response = await axios.post("http://localhost:3001/dogs", dogData)
          console.log(response.dogData)
        } catch (error) {
          console.error("error al crear dog", error.message)
        }
        } else{
          alert("primero debes arreglar los errores")
        }
    }
    const handlerTemperaments = (e, temperament) => {
        if (selectTemperaments === "") {
          setSelectTemperaments(e.target.value)
        } else {
          setSelectTemperaments(
            selectTemperaments.includes(temperament)
              ? selectTemperaments.replace(`${temperament}, `, "")
              : `${selectTemperaments}, ${e.target.value}`,
          );
        }
        // setDogData({...dogData, temperament:selectTemperaments})
        // convertirIdTemp()
        
    };
      
      useEffect(() => {
        // Se ejecutará cada vez que selectTemperaments se actualice
        const convertirIdTemp=()=>{
          const arrayTemp = selectTemperaments.split(",").map((cadena)=>{return cadena.trim()})
          const arrayId = []
          for (let i = 0; i < arrayTemp.length; i++) {
            const id = temperaments.indexOf(arrayTemp[i])+1
            arrayId.push(id)
          }
          setIdTemperaments(arrayId)
        }
        convertirIdTemp()
      }, [selectTemperaments, temperaments]);
      useEffect(() => {
        setDogData((prevDogData) => ({
          ...prevDogData,
          temperament: idTemperaments,
        }));
      }, [idTemperaments]);
      
      console.log(error)

    return (
        <div className={css.FormPage}>
          <Header/>
            <p>COMPLETA PARA CREAR NUEVA RAZA</p>
            <form onSubmit={sendForm}>
                <div className={css.divInput}>
                  <label htmlFor="">Nombre: </label>
                  <input type="text" placeholder="nombre de raza" name="name" value={dogData.name} onChange={handleDogData}/>
                    <div className={css.error}>{error&&error.name}</div>
                </div>
                <div className={css.divInput}>
                <label htmlFor="">Url de imagen: </label>
                <input type="text" placeholder="url de imagen" name="image" value={dogData.image} onChange={handleDogData}/>
                  <div className={css.error}>{error&&error.image}</div>
                </div>
                <div className={css.divInput}>
                <label htmlFor=" ">Altura: </label>
                <input type="text" placeholder="altura min-max" name ="height" value={dogData.height} onChange={handleDogData}/>
                  <div className={css.error}>{error&&error.height}</div>
                </div>
                <div className={css.divInput}>
                <label htmlFor="">Peso: </label>
                <input type="text" placeholder="peso min-max" name="weigth" value={dogData.weigth} onChange={handleDogData}/>
                  <div className={css.error}>{error&&error.weigth}</div>
                </div>
                <div className={css.divInput}>
                <label htmlFor="">Años de vida: </label>
                <input type="text" placeholder="años de vida min-max" name="life_span" value={dogData.life_span} onChange={handleDogData}/>
                  <div className={css.error}>{error&&error.life_span}</div>
                </div>
                
                <div className={css.temperamentos}>
                <label htmlFor="">agrega temperamentos:</label>       
                {temperaments.map((temperament)=>(
                    <div key={temperament} >
                        <input 
                        type="checkbox" 
                        name="temperament" 
                        id="" 
                        checked={selectTemperaments.includes(temperament)}
                        value={temperament} 
                        onChange={(e)=>handlerTemperaments(e, temperament) } />
                        <label htmlFor=""  >{temperament}</label>
                    </div>
                ))}
                </div>
                
                
                
        
                <div className={css.divCrearRaza}>
                <button type="submit" className={css.CrearRaza}>crear raza</button>
                </div>
            </form>
        </div>
    )
}
export default Form