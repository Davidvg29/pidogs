import { Link } from "react-router-dom"
import css from "./Landing.module.css"
function Landing() {
    return(
    <div className={css.Landing}>
      <h1 className={css.h1Landing}>BienveniDOG</h1>
      <div className={css.divH4Landing}>
          <h4 className={css.h4Landing}>EN ESTA WEB PODRAS APRENDER CARACTERISTICAS SOBRE RAZAS DE PERROS, HASTA PODRAS CREAR UNA...</h4>
      </div>
      <div className={css.divButtonLanding}>
        <Link to="/home"><button className={css.buttonLanding}>INGRESAR</button></Link>
      </div>
    </div>
    )
}
export default Landing