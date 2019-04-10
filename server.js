const express=require('express');
const handle=require('express-handlebars');
var app=express();
app.engine('handlebars',handle({defaultLayout:'mainpage'}));
app.set('view engine','handlebars');
app.use(express.static('views/static'));
app.use(express.urlencoded());
app.post('/data',(req,res)=>{
  var name=req.body.name;
  var address=req.body.addr;
  
  var place=req.body.place;
  var mobile=req.body.mobile;
  var mail =req.body.mail;

  console.log(name,address,place,mobile,mail);

});
app.post('/login',(req,res)=>{
    
    var user=req.body.username;
    var pass= req.body.password;
    if(user=="admin" && pass=="1234"){
        res.send("success");
    }else{
        res.send("failed");
    }

});
app.post('/register',(req,res)=>{
    
    var name=req.body.name;
    var admno= req.body.admno;
    var college= req.body.college;
    
        res.send(name+admno);
    

});
app.get('/',(req,res)=>{
    res.render("index",{name:'nikhil'});
});
app.get('/home',(req,res)=>{
    res.send("welcome");
});

app.get('/about',(req,res)=>{
    res.render("about",{name:'nikhil'});
});
app.get('/contact',(req,res)=>{

    res.render("contact");
});
app.get('/home/contact',(req,res)=>{
    res.send("<h1>my contact page</h1>");
});
app.get('//contact',(req,res)=>{
    
    res.send('[{"name":"nikhil","age":25},{"name":"kohli","age":26}]');
});
app.get('/gallery',(req,res)=>{

    res.render("gallery");
});
app.listen(process.env.PORT || 5000,()=>{
    console.log('running state');
});