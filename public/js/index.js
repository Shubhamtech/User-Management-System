$("#addUser").submit(function(event){
alert("data inserted sucessfully");
})

$("#updateUser").submit(function(event){
   event.preventDefault();

   var userAllData = $(this).serializeArray();
   var data = {}

   $.map(userAllData, function(n, i){
       data[n['name']] = n['value']
   })


   var request = {
       "url" : `http://localhost:3000/api/users/${data.id}`,
       "method" : "PUT",
       "data" : data
   }
  //ajax call to get api
   $.ajax(request).done(function(response){
       alert("Data Updated Successfully!");
   })

})
if(window.location.pathname=="/"){
   $ondelete=$(".table tbody td a.delete");
   $ondelete.click(function(){
      var id=$(this).attr("data-id");

      var request = {
         "url" : `http://localhost:3000/api/users/${id}`,
         "method" : "DELETE",
         
     }
     if(confirm("do you want to delete this record?")){
      $.ajax(request).done(function(response){
         alert("Data deleted Successfully!");
         location.reload();
     })
     }
   })

   

}