import {React} from "react";

export default function CarduserLast(props) {

const imagen = `https://grupo11-vinoteca.herokuapp.com/images/upload/${props.image}`;
const tipo = (props.tipo === "0")? "Cliente" : "Administrador"
return (
    <div className="card md-3 border-left-primary" style={{width: 350}}>
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Ultimo Ingresado</h6>
        </div>
        <div className="row">
            <div className="col-md-3 ml-3 mb-2 justify-content-center align-self-center">
                <img  className="img-fluid mt-2" src={imagen} alt="img"/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h4 className="card-title">{props.apellido} {props.nombre}</h4>
                    <p className="card-text"> {props.email}</p>
                    <p className="card-text"><small className="text-muted">{tipo}</small></p>
                </div>
            </div>
        </div>
    </div>
)

}