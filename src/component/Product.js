import React, {useState,useEffect} from 'react';
import axios from 'axios';
// import './App.css';

function Product (){
    const [items,setData]=useState([]);
    // const [objdata]=useState([]);
    //https://fakestoreapi.com/products
    //https://api.mapmycrop.com/diseases
    useEffect(()=>{
        axios({
            method:"GET",
            url:"https://fakestoreapi.com/products"
         }).then((res)=>{
             console.log(res.data); //res.data.data
            setData(res.data);  //res.data.data
         })
    },[])

  return (
    <div className='products-container'>
        {items.map((product)=>(
            <div className='card' key={product.id}>
             <div><img src={product.image} alt="#"/></div>
             <div className='card-description'>
                <h6>{product.name}</h6>
                <h6>{`price: ${product.affetected_plants}`}</h6>
                <button className='btn btn-primary'>Read More</button>
             </div>
            </div>
        ))};
    </div>
  )
}

export default Product