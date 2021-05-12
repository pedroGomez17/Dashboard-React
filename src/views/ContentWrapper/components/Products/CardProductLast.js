
import {React} from "react";
import Title from "../Title";


export default function CardProductLast (props){

console.log(props);
const imagen= (`https://grupo11-vinoteca.herokuapp.com/images/upload/${props.image}`)


    return(

        <div className="card md-3 border-left-primary" style={{width: 350}}>
                <Title name="Ultimo Ingresado"/>
                <div className="row g-0">
                   <div className="col-md-3 ml-3 mb-2 text-center">
                      <img  className="img-fluid" src={imagen} alt="img"/>
                   </div>
                   <div className="col-md-8">
                      <div className="card-body">
                         <h3 className="card-title">{props.name}</h3>
                         <p className="card-text"> {props.cepa}</p>
                         <p className="card-text"> {props.description}</p>
                         <p className="card-text"><small className="text-muted">Ultimo vino ingresado</small></p>
                      </div>
                   </div>
                </div>
             </div>
    )
}