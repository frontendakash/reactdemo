import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
function ViewProdect() {

  const { id } = useParams();
  // const [product, setProduct] = useState([]);

  // useEffect(() => {
  //   // console.log(id);
  //   const getProduct = async () => {
  //     const response = await fetch(`https://api.mapmycrop.com/diseases/$(id)`);
  //     setProduct(await response.json());
  //     console.log(product);
  //   }
  //   getProduct();
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);



  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://api.mapmycrop.com/diseases"
    }).then((res) => {
      console.log(res.data.data); //res.data.data
      setProduct(res.data.data);  //res.data.data
    })
  }, [])



  return (
    <div className='container-fluid py-5'>
      <div className='row'>
        {
          product.length > 0 && product.map((products) => {
            if (products.id == id) {
              return (
                <>
                  <div className='col-6' key={products.id}>
                    <div className='card w-50'>
                      {/* <div className='card-img-top ms-2' id="imgtop" >
                      <img src={products.images}  alt="..." />
                    </div>
                    <div className='card-title bg-dark' id="affetected_plants" style={{color:"white"}}>
                      {products.affetected_plants[0]}
                    </div> */}

                      <Carousel pause='hover' interval={null}>
                        {
                          products.images.map((img, i) => (
                            <Carousel.Item key={i}>
                              <img src={img} alt="..." />
                              <div className='text-center py-2'>
                                {products.affetected_plants[i]}
                              </div>
                            </Carousel.Item>
                          ))
                        }
                      </Carousel>
                    </div>
                  </div>

                  <div className='col-6'>
                    <div>
                      <h4>Symptoms :</h4>
                      <p>{products.symptoms}</p>
                    </div>
                    <div>
                      <h4>Organic Control</h4>
                      <p>{products.organic_control}</p>
                    </div>
                  </div>
                </>
              );
            }
          })
        }
      </div>
    </div>
  )
}

export default ViewProdect