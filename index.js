const express=require('express');
const app=express()
const port=process.env.PORT||3000
const host='35.164.95.156'
const path=require('path');
const hbs=require('hbs');


app.use(express.json({limit:'43mb'}));
app.set('view engine','hbs');
app.set('views','templates/views');
app.use(express.static(path.join(__dirname,'public')))
hbs.registerPartials(path.join(__dirname,'templates/partials'))
hbs.registerPartials(path.join(__dirname,'templates/partials/footer'))

app.get("",(req,res)=>
{
    res.render("index");
})

app.get("/about",(req,res)=>
{
    res.render('about');
})

app.get("/weather",(req,res)=>
{
    res.render('weather');
})

app.get("*",(req,res)=>
{
    res.render('error');
})




app.listen(port,host,()=>
{
    console.log('server connected successfully');
})