import { useState } from "react"
import Card from "../Card/Card"
import css from "./Cards.module.css"
function Cards({dogs}) {
    
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(8)

    const arrayDividioEn8 = dogs.slice(min, max)

    const anterior =()=>{
        if(min>0){
            setMin(min-8)
            setMax(max-8)
        }
    }
    const siguiente =()=>{
        if(arrayDividioEn8.length===8){
            setMin(min+8)
            setMax(max+8)
        }
    }

  

    return(
        <div>
            <div className={css.Cards}>
            {dogs.length!==0?
            arrayDividioEn8.map((dog)=>(
                <Card 
                    key={dog.id}
                    id={dog.id}
                    name={dog.name}
                    image={dog.image && dog.image.hasOwnProperty("url")?
                            dog.image.url:
                            dog.image}
                    temperament={dog.temperament}
                    weight={dog.weight && dog.weight.hasOwnProperty("metric")?
                            dog.weight.metric:
                            dog.weight}
                 />
            )):
            (<div>cargando...</div>)}
            
        </div>
            <div className={css.Buttons}>
                <button onClick={anterior}>anterior</button>
                <button onClick={siguiente}>siguiente</button>
            </div>
        </div>
    )
}
export default Cards