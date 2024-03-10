const express=require('express');
const bodyparser=require('body-parser');
const app=express();
const Port=3000;
let blogList=[];
app.use(bodyparser.json());  //used to parse json data
app.use(bodyparser.urlencoded({extended:true})); //it reads the json data
app.get('/blogs',(req,res)=>{
    // console.log(res);
     return res.status(200).json({
        data:blogList,
        success:true,
    });
});
app.post('/blogs',(req,res)=>{
    blogList.push({title:req.body.title,
        content:req.body.content,
        id:Math.floor(Math.random()*1000),
    });
    console.log(req.body);
    return res.status(201).json({
        success:true,
    });
})
app.get('/blogs/:id',(req,res)=>{
    const result=blogList.filter((blog)=>blog.id==req.params.id);
    return res.status(200).json({
        data:result,
        success:true,
    });


})
app.delete('/blogs/:id',(req,res)=>{
    const resu=blogList.filter((blog)=>blog.id==req.params.id).pop();
    return res.status(200).json({
        data:resu,
        success:true,
    });
})

app.listen(Port,function(){
    console.log(`Server is started at ${Port}`);
});