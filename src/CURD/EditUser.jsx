import React, { useEffect } from "react"
import style from "./homecurd.module.css"
import { useState } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
const EditUser=()=>{
    let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let [company,setCompany]=useState("")
    let navigate=useNavigate()

    let {abc}=useParams()
    console.log(abc);
    useEffect(()=>{
        axios.get(`http://localhost:3000/data/${abc}`)
        .then((response)=>{
            console.log(response.data);
            setName(response.data.name);
            setSalary(response.data.salary);
            setCompany(response.data.company);
        })
    },[])
    let formHandle=()=>{
        let payload={name,salary,company}
        axios.put(`http://localhost:3000/data/${abc}`,payload)
        .then(()=>{
            console.log("DATA HAS BEEN UPDATED")
        })
        navigate("/user")
    }
    return(
        <div id={style.myform}>
             <form>
                <label>Emp-Name</label>
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
                <label >Emp-Salary</label>
                <input type="number" value={salary} onChange={(e)=>{setSalary(e.target.value)}}  />
                <label>Emp-Company</label>
                <input type="text" value={company} onChange={(e)=>{setCompany(e.target.value)}} />
                <button onClick={formHandle}>Submit</button>
            </form>
        </div>
    )
}
export default EditUser