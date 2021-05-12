
function CardsContent (props){

    return(
      <div className="card ml-4 md-3 border-left-success" style={{width: 350}}>
         <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary"> Total de {props.name}</h6>
         </div>
         <div className="row g-0">
            <div className="card-body text-center display-1 font-weight-bold text-gray-800">
                {props.valor}
              </div>
           </div>
        </div>
    );
}

export default CardsContent ;