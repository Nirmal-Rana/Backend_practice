const express=require('express');
const app=express();

const port=5000;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});

app.get("/",(req,res)=>{
    res.send("Nirmal Rana Mager")
});
console.log("helo wold");