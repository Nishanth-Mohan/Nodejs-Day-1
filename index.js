import express from "express";
//importing space


//declaration/initailization
const app = express();
const PORT = 4000;

//Middleware
app.use(express.json())

//routes
app.get('/',(req,res)=>{
 //res.status(200).json({message:"Hi all welcome to our first node"})
 res.status(200).send(`<span style="background-color:Aqua;color:black;font-size:100px">Welcome to our first app in node</span>`)
})

app.get("/data",(req,res)=>{
    res.status(200).send(`<span style="background-color:Aqua;color:black;font-size:100px">Welcome to our first endpoint/data</span>`)  
})


app.listen(PORT,()=>{
    console.log(`App is listening on the port ${PORT}`);
})