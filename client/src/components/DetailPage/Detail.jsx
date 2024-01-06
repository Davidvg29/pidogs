import axios from "axios"
import css from "./Detail.module.css";
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import Header from "../Header/Header";

const Detail = ()=>{

    const {id} = useParams()
    const [dog, setDog] = useState({status:"cargando..."})
 
    useEffect(()=>{
        axios(`http://localhost:3001/dogs/${id}`)
        .then(({data})=>{
           
            if ( data.name || data[0].name ) {
                setDog(data)
            }else{setDog({status:"raza inexistente"})}
        }).catch((e)=>setDog({status: e.message}))
    },[id])


    const mostrarTemperamentos = () => {
        if (dog[0] && dog[0].temperaments) {
          return dog[0].temperaments.map((temp) => temp.name_temperament).join(', ');
        } else if (dog.temperaments && Array.isArray(dog.temperaments)) {
          return dog.temperaments.map((temp) => temp.name_temperament).join(', ');
        } else if (dog.temperament) {
          return dog.temperament;
        }
        // return "sin temperamentos";
      };

    return (
      <div className={css.Detail}>
         <Header/>
           {/* <h3>detalles de raza</h3> */}
           {/* <Link to="/home">volver atras</Link> */}
           {!dog.status ? (
               <div className={css.conteiner}>
                    <h3 className={css.Name}>{dog[0]&&dog[0].name?dog[0].name:dog.name}</h3>
                    <img src={dog[0]&&dog[0].image ? dog[0].image.url : dog.image} alt="imagen" className={css.img}/>
                    <div className={css.caracteristicas}>
                      <div>Altura: <b>{dog[0]&&dog[0].height ? dog[0].height.metric: dog.height}</b></div>
                      <div>Peso: <b>{dog[0]&&dog[0].weight ? dog[0].weight.metric: dog.weigth}</b></div>
                      <div>Temperamentos: <b>{dog[0]&&dog[0].temperament?dog[0].temperament: mostrarTemperamentos()}</b></div>
                      <div>Años de vida: <b>{dog[0]&&dog[0].life_span?dog[0].life_span: dog.life_span}</b></div>
                    </div>
               </div>
           ):
           (<div>{dog.status}</div>)}
       </div>
    )
}
export default  Detail