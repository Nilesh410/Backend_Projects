import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";
function App() {
  // const [count, setCount] = useState(0)
  const [infos,setProductinfo]=useState([])
  useEffect(()=>{
    axios.get("/api/product_info")
    .then((response)=>{setProductinfo(response.data)})
    .cath((error)=>{console.log(error)})
  })
  return (
    <>
      <h1>
          Welcome to First Fullstack Project
      </h1>
      <p>PRODUCT_INFO:{infos.length}</p>

      {
        infos.map((info,index)=>{
          <div key={info.id}>
              <h3>{info.product_name}</h3>
              <h2>{info.product_price}</h2>
          </div>
        })
      }
    </>
  )
}

export default App
