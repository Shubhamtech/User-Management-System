var Userdb = require('../model/model');

//create and save new user
exports.create=(req,res)=>{
//validate request
if(!req.body){
    res.status(400).send({message:"content can't be empty!"});
    return;
    
}

//new user
const user=new Userdb({
    name:req.body.name,
    email:req.body.email,
    gender:req.body.gender,
    status:req.body.status
})

//save user in database
user
 .save(user)
 .then(data=>{
   // res.send(data);
   res.redirect('/addUser');
 })
 .catch(err=>{
    res.status(400).send({
        message:err.message || "some error occur in creation"
    });
 });
}

//retrive and return all usser/retrive and return a single user
exports.find=(req,res)=>{
if(req.query.id){
   const id=req.query.id;
   Userdb.findById(id)
    .then(data=>{
      if(!data){
         res.status(404).send({message:`not found user with id ${id}`});
      }
      else{
         res.send(data);
      }
    })
    .catch(err=>{
      res.status(500).send({message:"error in retriving user with it"+id});
    })
}
else{
 Userdb.find()
 .then(user=>{
    res.send(user);
 })
 .catch(err=>{
    res.status(400).send({message:err.message || "error occur during retriving user"});
 });
}
}

//update a new identified user by user id
exports.update=(req,res)=>{
 if(!req.body){
   return res
    .status(400)
    .send({message:"empty data can't be modify"});
 }
  const id=req.params.id;
  Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
   .then(data=>{
      if(!data){
         res.status(404).send({message:`can't update ${id}.user may not found`})
      }
      else{
         res.send(data);
      }
   })
   .catch(err=>{
      res.status(500).send({message:"error in update user info"});
   })
}

//delete a user with specified id in the request
exports.delete=(req,res)=>{
 const id=req.params.id;
 Userdb.findByIdAndDelete(id)
  .then(data=>{
    if(!data){
      res.status(404).send({message:`cannot delete with ${id} wrong id`});
    }
    else{
      res.send({
         message:"User was deleted sucessfully!"
      })
    }
  })
  .catch(err=>{
    res.status(500).send({
      message:"could not delete user with id" + id
    });
  });
}

