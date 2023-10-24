import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import style from "./homecurd.module.css"
const CreateUser = () => {
    let [name, setName] = useState(" ")
    let [salary, setSalary] = useState(" ")
    let [company, setCompany] = useState(" ")
    let navigation = useNavigate()

    let salaryData = (e) => {
        setSalary(e.target.value)

    }
    let companyData = (e) => {
        setCompany(e.target.value)
    }
    let formHandle = (e) => {
        e.preventDefault()
        let payload = { name, salary, company }
        axios.post("http://localhost:3000/data", payload)
            .then(() => {
                console.log("DATA HAS BEEN ADDED")
            })
            .catch(() => {
                console.log("PLEASE ADD THE DATA")
            })
        navigation("/user")
    }

    const handleChange = e => {
        const result = e.target.value.replace(/[^A-Z .$]/gi, '');
        setName(result);

    }



    return (
        <div id={style.myform}>
            <form >
                <label>Name</label>
                <input  autoComplete="off" type="text" value={name} onChange={handleChange} />

                <label >Salary</label>
                <input type="number" value={salary} onChange={salaryData} />

                <label>Company</label>
                <input type="text" value={company} onChange={companyData} />

                <button onClick={formHandle}>Submit</button>
            </form>
        </div>
    )
}
export default CreateUser
