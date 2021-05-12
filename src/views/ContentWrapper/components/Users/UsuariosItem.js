
function UsuariosItem (props){
  const valor = (props.administrador === "0")? "Cliente" : "Administrador";
    return(
     <div className="row container-fluid">
        <div className="col-sm-2 border-bottom">{props.lastName}</div>
        <div className="col-sm-2 border-bottom">{props.name}</div>
        <div className="col-sm-4 border-bottom">{props.email}</div>
        <div className="col-sm-2 border-bottom">{valor}</div>
      
    </div>
    );
}

export default UsuariosItem;