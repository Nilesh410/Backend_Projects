import express from 'express';
import 'dotenv/config'
const app=express();

app.get("/",(req,res)=>{
    res.send("<h1>First Full Stack Project</h1> ")
})

app.get("/api/product_info",(req,res)=>{
    const info=[
        {
            id:1,
            product_name:"ABC",
            product_price:345
        },
        {
            id:2,
            product_name:"XYZ",
            product_price:532
        },
        {
            id:3,
            product_name:"PQR",
            product_price:650
        },
        {
            id:4,
            product_name:"LMN",
            product_price:550
        },
        {
            id:5,
            product_name:"JKL",
            product_price:725
        }
    ];
    res.send(info);
})

app.listen(process.env.PORT,()=>{
    console.log(`server is started on port no ${process.env.PORT}`);
})