import React from "react";
import ListTitle from "./ListTitle";
import ListItem from "./ListItem";
import ProductLast from "./ProductLast";
import CardsContent from "../CardContent";

import {useState, useEffect} from "react";
import Title from "../Title";


export default function Products(){

    const [products, setProducts] = useState(0);

    useEffect(() => {
        fetch('https://grupo11-vinoteca.herokuapp.com/api/products')
       .then (response => response.json())
       .then (data =>{
        setProducts(data.data);
        
        },)
     },[])

    return ( 
        <div className="col">
            <div className="col mb-4">						
                <div className="card shadow mb-4">
                   <Title name= "Productos" />
                   <div className="card-body">
                       <ListTitle />
                       <ListItem productslist={products}/> 
                   </div>
                  
                   <div className="card-body">
                       <div className="row container-fluid">
                       <ProductLast />    
                       <CardsContent name= "Productos" valor={products.length} />
                       </div>
                   </div>
                </div>
        </div>

      </div>
    )

}
