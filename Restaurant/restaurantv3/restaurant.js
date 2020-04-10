function validate() {
   
   
   let name = document.getElementById("Name").value; 
   let email = document.getElementById("Email").value;
   let phoneNum = document.getElementById("phone").value;

   console.log(name); 

   if(name===""){
      alert("Please Enter your name.");
   }
   if(email===""){
      alert("Please Enter your email correctly");
   }
   if(phoneNum===""){
      alert("Please Enter your phone number");
   } 
}