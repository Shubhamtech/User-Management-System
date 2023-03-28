const axios=require('axios');

exports.homeRoutes=function(req,res){
    //make a get request to /api/user
    axios.get('http://localhost:3000/api/users')
     .then(function(response){
        res.render("index",{users:response.data}); 
     })
     .catch(err=>{
        res.send(err);
     })
    //res.send("UMS APP");
    //res.render("index");
}

exports.updateUser=(req,res)=>{
   //request and get specific user instead of returning all users
   //console.log(req.query.id);
    axios.get('http://localhost:3000/api/users',{params:{id:req.query.id}})
    .then(function(userdata){
      //console.log(userdata.data);
       res.render("updateUser",{user:userdata.data})
    })
       //res.render("updateUser");
    .catch(err=>{
       res.send(err);
    });
}