import {useState, useEffect} from "react";
import UsuariosItem from "./UsuariosItem";

export default function Loadusers (){

const [users, setUsers] = useState([]);


    useEffect(() => {
        fetch('https://grupo11-vinoteca.herokuapp.com/api/users')
       .then (response => response.json())
       .then (data =>{
            setUsers(data.data);
        
             })
     },[])

     return(
        <div>
            {   users.map((user, i ) => {
                return(
                <UsuariosItem key={`user_${i}`} lastName={user.apellido} name={user.nombre} email={user.email} administrador={user.administrador} />
                )
            })
               
            }
        </div>          
        )
    
    }