import { Link } from "react-router-dom"
import style from "./homecurd.module.css"

const HomeCurd=()=>{
    return(
        <section id={style.nav}>
            <Link to="/">CREATE-USERS</Link>
            <Link to="/User">USERS</Link>
        </section>
    )
}
export default HomeCurd