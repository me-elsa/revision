import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";

//1
const app = express()
app.get('/',(req,res)=> {
    res.send({
        message: "welcome g"
    })
})
//2
//port 
const PORT  = 8080
//run listen
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}...`.bgMagenta.white);})


