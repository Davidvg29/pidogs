import React from "react";
import css from "./Card.module.css";
import {Link} from "react-router-dom"

function Card({id, name, image, temperament, weight}) {
    return(
        <div>
            <Link to={`/detail/${id}`}>
                <img src={image} alt={image} className={css.img}/>
            </Link>
            <div>{id}</div>
            <div>{name}</div>
            <div>{temperament}</div>
            <div>{weight}</div>
        </div>
    )
}
export default Card