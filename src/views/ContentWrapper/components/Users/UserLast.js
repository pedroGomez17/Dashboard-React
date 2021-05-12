
import {React, useState, useEffect} from "react";
import CardUserLast from "./CardUserLast";

export default function UserLast (){
    
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
                    { users.map((user, i ) => {
                        if(i=== users.length-1)
                          return( <CardUserLast  key={`user_${i}`} apellido ={user.apellido} nombre= {user.nombre} email={user.email} tipo={user.administrador} image={user.avatar}/>
                        )
                    })}
                       
                    
                </div>          
                )
            
            } 
