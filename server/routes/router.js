const express=require('express');
const route=express.Router(); //allow to create different router in seperate file
const services=require('../services/render');
const controller=require('../controller/controller');
const axios=require('axios');
/*
 @description  home route
 @method get /
 */
route.get('/',services.homeRoutes);



route.get('/addUser',function(req,res){
    res.render("addUser");
});
route.get('/updateUser',services.updateUser);
/*route.get('/updateUser',function(req,res){
//request and get specific user instead of returning all users
 axios.get('http://localhost:3000/api/users',{params:{id:req.query.id}})
 .then(function(userdata){
    res.render("updateUser",{user:userdata.data})
 })
    //res.render("updateUser");
 .catch(err=>{
    res.send(err);
 });
});*/


//API
route.post('/api/users',controller.create);
route.get('/api/users',controller.find);
route.put('/api/users/:id',controller.update);
route.delete('/api/users/:id',controller.delete);


module.exports=route; //we can use this route variables
// now impoRt this file in server.js/app.js/index.js etc.. server file and use these routes