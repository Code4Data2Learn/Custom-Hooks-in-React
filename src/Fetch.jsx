import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useFetch from './useFetch'
import Header from './Header'

function FetchData() {
  const [data] = useFetch("https://api.escuelajs.co/api/v1/products");

  return (
    <>
      <Header/>
      <div style={{display:'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap:'5px', marginTop: '150px'}}>
      {data && 
        data.map((item)=>{
          return <p key={item.id} style={{border: '1px solid white', width: '300px', height: '280px'}}><img src={item.category.image} style={{display:'block',padding: '50px',width: '200px', height: '150px'}}/> {item.category.name}</p>
        })}
      </div>
    </>
  )
}

export default FetchData;