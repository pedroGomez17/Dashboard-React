import { React, useEffect , useState} from "react";
import UsersList from "./UsersList";
import UsersListTitle from "./UsersListTitle";
import UserLast from "./UserLast";
import CardsContent from "../CardContent";
import Title from "../Title";


export  default function Users(){

    const [users, setUsers] = useState([]);


    useEffect(() => {
        fetch('https://grupo11-vinoteca.herokuapp.com/api/users')
       .then (response => response.json())
       .then (data =>{
            setUsers(data.data);
        
             })
     },[])


    return (
        <div className="col">
            <div className="col mb-4">						
                <div className="card shadow mb-4">
                    <Title name="Usuarios"/>
                    <div className="card-body">
                        <UsersListTitle />
                        <UsersList /> 
                    </div>
                    <div className="card-body">
                        <div className="row container-fluid">
                            <UserLast name="Marcelo Caresano" email="mcaresanogmail.com" tipoUsuario="Cliente"/>
                            <CardsContent name= "Usuarios" valor={users.length} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}