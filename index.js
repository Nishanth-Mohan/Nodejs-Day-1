import express from "express";
//importing space


//declaration/initailization
const app = express();
const PORT = 4000;

//Middleware
app.use(express.json())

//routes
app.get('/',(req,res)=>{
 res.status(200).json({message:"Hi all welcome to our first node"})
})

app.listen(PORT,()=>{
    console.log(`App is listening on the port ${PORT}`);
})