
// import Navbar from "./comopnents/Navbar";
// import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Challenges from "./comopnents/Challenges";
// import Explore from "./comopnents/Explore";
// import Hire from "./comopnents/Hire";
/*const App=()=>{
    return(
        <div>
            <Navbar/>
        </div>
    )
}
export default App
*/


import NewForm from "./comopnents/NewForm"

// const App=()=>{
//     return(
//         <div>
//             <BrowserRouter>
//             <Navbar/>
//             <Routes>
//                 <Route element={<Explore/>} path="/abc" />
//                 <Route element={<Hire/>} path="/xyz" />
//                 <Route element={<Challenges/>} path="/def" />
//             </Routes>
//             </BrowserRouter>
//         </div>
//     )
// }
// export default App

//==========================================================================================================
//-------------------------------------------Crud-------------------------------------------------------

import { BrowserRouter,Routes,Route } from "react-router-dom";
import CreateUser from "./CURD/CreateUser"
import HomeCrud from "./CURD/HomeCurd"
import User from "./CURD/User"
import EditUser from "./CURD/EditUser";

const App=()=>{
    return(
        <div aria-autocomplete="off">
            <BrowserRouter>
            <HomeCrud/>
           
            <Routes>
                <Route path="/" element={<CreateUser/>}/>
                <Route path="/user" element={<User/>}/>
                <Route path="/edit/:abc" element={<EditUser/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App


 // have to run json server first : npx json-server Backend/db.json
