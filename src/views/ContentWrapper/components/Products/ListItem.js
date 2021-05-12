import {useState, useEffect} from "react";
import Wine from "./Wine";

export default function ListItem (){

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
                return(
                <Wine key={`vino_${i}`} name={product.name} price={product.price} cepa={product.cepas.name} desc = {product.description}  />
                )
            })
               
            }
        </div>          
        )
    
    } 