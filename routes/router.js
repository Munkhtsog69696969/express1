const express=require("express");

const router=express.Router();

router.get("/",async(req,res)=>{
    const data=await db.find({});
    res.send(data);
})

router.post("/post",async(req,res)=>{
    const data=new db({name:"munkhuu"});
    data.save();
    res.send("created")
})

router.put("/put/:id",async(req,res)=>{
    const id=req.params.id;
    const data=await db.findByIdAndUpdate(id,{name:"moony"});
    res.send("updated");
})

router.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id;
    await db.deleteOne({_id:id});
    res.send("deleted");
})

router.post("/createNew",async(req,res)=>{
    const body=req.body;
    const data=new db(body);
    await data.save();
    res.send("created new data");
})


module.exports=router;