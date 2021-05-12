import {React, useState, useEffect} from "react";
import CardProductLast from "./CardProductLast";
export default function ProductLast (){

    const [products, setProducts] = useState([]);
       
        useEffect(() => {
            fetch('https://grupo11-vinoteca.herokuapp.com/api/products')
           .then (response => response.json())
           .then (data =>{
                setProducts(data.data);
           
                 })
         },[])
         
         return(
            <div>
                { products.map((product, i ) => {
                    if(i=== products.length-1)
                      return( <CardProductLast  key={`product_${i}`} name={product.name} cepa={product.cepas.name} description={product.description} image={product.image.path}/>
                    )
                })}
                   
                
            </div>          
            )
        
        } 