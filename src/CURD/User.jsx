import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import style from "./homecurd.module.css"
import {Link} from "react-router-dom"

const User=()=>{
    let [content,setContent]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/data")
        .then((response)=>{
           // console.log(response.data);
           setContent(response.data)
        })
    },[])
    let delData=(x)=>{
        axios.delete(`http://localhost:3000/data/${x}`)
        window.location.assign("/user")
    }
    return(
        <div id={style.box}>
            {content.map((x)=>{
                return(
                    <div id={style.profile}>
                        <table>
                        <tr>
                            <td>Employee {x.id}</td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td>{x.name}</td>
                            </tr>
                            <tr>
                                <td>Salary</td>
                                <td>{x.salary}</td>
                            </tr>
                            <tr>
                                <td>Company</td>
                                <td>{x.company}</td>
                            </tr>
                            <tr>
                                <td><button id={style.btn}><Link to={`/edit/${x.id}`}>EDIT</Link></button></td>
                                <td><button id={style.del} onClick={()=>{delData(x.id)}}>DELET</button></td>
                            </tr>
                        </table>
                       
                    </div>
                )
            })}
            
        </div>
    )
}
export default User