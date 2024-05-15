import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
function App() {
  // const [count, setCount] = useState(0)
  const [infos,setProductinfo]=useState([])
  useEffect(()=>{
    axios.get('/api/infos')
    .then((response)=>{setProductinfo(response.data)})
    .catch((error)=>{console.log(error)})
  })
  return (
    <>
      <h1>
          Welcome to First Fullstack Project
      </h1>
      <p>PRODUCT_INFO:{infos.length}</p>

      {
        infos.map((info,index)=>(
          <div key={info.id}>
              <h2>{"Product Id:"+info.id}</h2>
              <h3>{"Product_Name:"+info.product_name}</h3>
              <h4>{"Product_Price"+info.product_price}</h4>
          </div>
        ))
      }
    </>
  )
}

export default App
