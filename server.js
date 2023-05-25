const express =require('express');
const app=express();
const bodyParser= require('body-parser');
app.use(bodyParser.json());
app.set('view engine', 'ejs');
const db = require('./models/index')
const userCtrl= require('./controllers/userController')


app.get('/',function(req,res){
    console.log("app is running");
   res.render('index.ejs',{ title : 'Index'});
})

app.get('/get_data',userCtrl.data_table);

app.listen(3000, ()=>{
    console.log("Server is running");
})
