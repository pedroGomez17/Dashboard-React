import { React } from "react";

function Wine (props){
    return(
      <div className="row container-fluid m-0 p-0">
         <div className="col-sm-3 border-bottom">{props.name}</div>
         <div className="col-sm-3 border-bottom">{props.cepa}</div>
         <div className="col-sm-5 border-bottom">{props.desc}</div>
         <div className="col-sm-1 border-bottom">$ {props.price}</div>
      </div>
    );
}

export default Wine;