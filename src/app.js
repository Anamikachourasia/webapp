const express= require('express');
const app=express();// to access all methods of express
const path =require('path');
const hbs= require('hbs');
// const { hasUncaughtExceptionCaptureCallback } = require('process');
const port= process.env.PORT ||8000;// by default port number, will change while deployement 
//for using static path
const static_path=path.join(__dirname,"../public");
const template_path =path.join(__dirname,"../templates/views");
const partial_path =path.join(__dirname,"../templates/partials");
app.set('view engine','hbs');

app.set('views',template_path);
hbs.registerPartials(partial_path);
app.use(express.static(static_path));
//routing of home page
app.get("",(req,res)=>{
    res.render('index')
})
// routing about page
app.get("/about",(req,res)=>{
    res.render("Welcone to about")
})
// routing weather page
app.get("/weather",(req,res)=>{
    res.render('weather')
})
app.get("*",(req,res)=>{
    res.render('errorpage',{
        errorMsg: 'Oops! Page Not Found'
    })
})
app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})