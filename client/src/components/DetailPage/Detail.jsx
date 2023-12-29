import axios from "axios"
import css from "./Detail.module.css";
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

const Detail = ()=>{

    const {id} = useParams()
    const [dog, setDog] = useState({})

    useEffect(()=>{
        axios(`http://localhost:3001/dogs/${id-1}`)
        .then(({data})=>{
            if (data.name) {
                setDog(data)
            }else{setDog({error:"raza inexistente"})}
        }).catch((e)=>console.log(e.message))
    },[id])

    return (
       <div>
           <h3>detalles de raza</h3>
           <Link to="/home">volver atras</Link>
           {!dog.error ? (
               <div>
                    <div>{dog.name}</div>
                    <img src={dog.image ? dog.image.url : dog} alt="" className={css.img}/>
                    <div>{dog.height ? dog.height.metric:false}</div>
                    <div>{dog.weight ? dog.weight.metric: false}</div>
                    <div>{dog.temperament}</div>
                    <div>{dog.life_span}</div>
               </div>
           ):
           (<div>raza inexistente</div>)}
       </div>
    )
}
export default  Detail