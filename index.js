
const express=require("express");

const cors=require("cors");

const mongoose=require("mongoose");

const uri="mongodb+srv://Munkhtsog:Munkhtsog2005@cluster0.qxesjs4.mongodb.net/?retryWrites=true&w=majority";

mongoose.set('strictQuery', true);

const port=8000;

const app=express();

app.use(cors());

app.use(express.json());

async function connect(){
    try{
        await mongoose.connect(uri);
        console.log("db");
    }catch(error){
        console.log(error);
    }
}

connect();

const db=mongoose.model("database1",{name:String,age:Number,status:String});

const router=require("./routes/router.js");

app.use("/",router);

// app.get("/",async(req,res)=>{
//     const data=await db.find({});
//     res.send(data);
// })

// app.post("/post",async(req,res)=>{
//     const data=new db({name:"munkhuu"});
//     data.save();
//     res.send("created")
// })

// app.put("/put/:id",async(req,res)=>{
//     const id=req.params.id;
//     const data=await db.findByIdAndUpdate(id,{name:"moony"});
//     res.send("updated");
// })

// app.delete("/delete/:id",async(req,res)=>{
//     const id=req.params.id;
//     await db.deleteOne({_id:id});
//     res.send("deleted");
// })

// app.post("/createNew",async(req,res)=>{
//     const body=req.body;
//     const data=new db(body);
//     await data.save();
//     res.send("created new data");
// })





app.listen(port,()=>{
    console.log("Server listening at",port);
})