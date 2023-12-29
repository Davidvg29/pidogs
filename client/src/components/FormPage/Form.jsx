import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import validation from "../../utils/validation"
import axios from "axios"

const Form =()=>{
    const temperaments = useSelector((state)=>state.temperaments)
    const [selectTemperaments, setSelectTemperaments] = useState("")
    const [idTemperaments, setIdTemperaments] = useState()

    const [dogData, setDogData] = useState({
        name: "",
        image:"",
        weigth:"",
        height:"",
        life_span:"",
        temperament: ""
    })
    const handleDogData = (e)=>{
            setDogData({
                ...dogData,
                [e.target.name]: e.target.value})
        
    }
    const sendForm = async (e)=>{
        e.preventDefault()
        console.log(dogData)
        try {
          const response = await axios.post("http://localhost:3001/dogs", dogData)
          console.log(response.dogData)
        } catch (error) {
          console.error("error al crear dog", error.message)
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
      
    return (
        <div>
            compnente form
            <form onSubmit={sendForm}>
                <input type="text" placeholder="nombre" name="name" value={dogData.name} onChange={handleDogData}/>
                <input type="text" placeholder="url de imagen" name="image" value={dogData.image} onChange={handleDogData}/>
                <input type="text" placeholder="altura min-max" name ="height" value={dogData.height} onChange={handleDogData}/>
                <input type="text" placeholder="peso min-max" name="weigth" value={dogData.weigth} onChange={handleDogData}/>
                <input type="text" placeholder="años de vida min-max" name="life_span" value={dogData.life_span} onChange={handleDogData}/>
                <label htmlFor="">agrega temperamentos:</label>
                
                {temperaments.map((temperament)=>(
                    <div key={temperament}>
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
                
                
                
        
                <button type="submit" >crear raza</button>
            </form>
        </div>
    )
}
export default Form