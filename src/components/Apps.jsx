import React from 'react'
import { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";

const Apps=()=> {

  
  const[fake, setFake]  = useState([]);
  console.log(fake)

  useEffect(()=>{
    fakestore();
  },[])

  const fakestore=async()=>{
    const response=await fetch('https://fakestoreapi.com/products')
    // console.log(response)
    const jsonData =await response.json();
    // console.log(jsonData)
    setFake(jsonData)
  }
  // fakestore()

  return (
    <>
     <h2>Fake Api store</h2>
      <div className='container'>
        {fake.map((values)=>{
         return(
         <>
         <div className='box'>
          <div className='content'>
           <h5>{values.title}</h5>
           <h3>Price : {values.price}</h3>
           {/* <p>{values.description} </p> */}
          </div>
          <img src={values.image} alt="" />
        
          <button>Buy Now</button>
          
        </div>
        
         </>
         )
        })}
      
    
      </div>
    </>
  )
}

export default Apps
