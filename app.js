const dotenv=require('dotenv');
dotenv.config({path:'config.env'});
const express=require('express');
const morgan=require('morgan');
const bodyParser=require('body-parser');
//const path=require("path");

const connectDB=require('./server/database/connection');

const app=express();

const PORT=process.env.PORT;

//log requrest
app.use(morgan('tiny'));

//mongodb connection
connectDB();
//parse the request data in body parser
app.use(bodyParser.urlencoded({extended:true}));

//set view engine
app.set("view engine","ejs");
//app.set("views",)

app.use(express.static("public"));
//load virtual path
//app.use('/css',express.static(path.resolve(__dirname,"public/css"))); //css/sty;e.css

//load routers
app.use('/',require('./server/routes/router'));

app.listen(PORT,()=>{console.log(`server is running on port ${PORT}`)});