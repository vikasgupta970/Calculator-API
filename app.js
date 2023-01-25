const express= require('express');


const app=express();
app.use(express.json());


app.get("",(req,res)=>{
    console.log("HEllo");
    res.status(200).send("Heyy Welcome To Calculator API");
})

// API Sum

app.get("/sum",(req,res)=>{
    console.log(req.body);
    let arr=req.body.numbers;
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    if(typeof (sum)==NaN){
        res.statusCode(400).send({"Error":"Request does not have a number"});
    }
    else{
        res.status(200).send({"Summation":sum})
    }
});



// API Diff 


app.get("/diff",(req,res)=>{
    console.log(req.body);
    let x=req.body.firstnum;
    let y=req.body.Secondnum;
    let z=Math.abs(x-y);

    if(typeof (z)==NaN){
        res.statusCode(400).send({"Error":"Request does not have a number"});
    }
    else{
        res.status(200).send({"Difference": z})
    }
});



// API Prod


app.get("/prod",(req,res)=>{
    console.log(req.body);
    let arr=req.body.numbers;
    let sum=1;
    for(let i=0;i<arr.length;i++){
        sum*=arr[i];
    }
    if(typeof (sum)==NaN){
        res.statusCode(400).send({"Error":"Request does not have a number"});
    }
    else{
        res.status(200).send({"Product":sum})
    }
});


// API Division


app.get("/div",(req,res)=>{
    console.log(req.body);
    let x=req.body.firstnum;
    let y=req.body.Secondnum;
    let z=x/y;

    if(typeof (z)==NaN){
        res.statusCode(400).send({"Error":"Request does not have a number"});
    }
    else{
        res.status(200).send({"Division": z})
    }
});

const port=3001;
const hostname="localhost";

app.listen(port,hostname,()=>{
    console.log(`Server running at ---> http://${hostname}:${port}/`);
});