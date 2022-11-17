import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import './App.css';

function Product() {
  const [items, setData] = useState([]);
  // const [objdata]=useState([]);

  //https://fakestoreapi.com/products
  //https://api.mapmycrop.com/diseases
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://api.mapmycrop.com/diseases"
    }).then((res) => {
      //  console.log(res.data); //res.data.data
      setData(res.data.data);     //res.data.data
    })
  }, [])

  return (
    <div className='products-container'>
        {
          items.map((product) => (
            <div className='card' key={product.id}>
              <div><img src={product.images[0]} alt="#" /></div>
              <div className='card-description'>
                <h6>{product.name}</h6>
                <Link to={`/ViewData/${product.id}`}>
                  <button className='btn btn-primary'>Read More</button>
                </Link>
              </div>
            </div>
          ))
        }
    </div>
  )
}
export default Product