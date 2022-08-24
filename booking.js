function passvalues(){
    // ===== Store First Name ===== //
    var firstname=document.getElementById("firstName").value;
    localStorage.setItem("firstName",firstname.value);
    console.log(firstname.value)
    // ===== Store Last Name ===== //
    var lastname=document.getElementById("lastName").value;
    localStorage.setItem("lastName",lastname.value);
    // ===== Store Age ===== //
    var age=document.getElementById("age").value;
    localStorage.setItem("age",age.value);
    // ===== Store Gender ===== //
    var age=document.getElementById("gender").value;
    localStorage.setItem("gender",gender);
    // ===== Store Email ===== //
    var emailId=document.getElementById("Mail").value;    
    localStorage.setItem("b1",emailId);    
    // ===== Store Contact ===== // 
    var phonenumber=document.getElementById("Contact").value;
    
    localStorage.setItem("Contact",phonenumber);
    var gen = document.getElementById("rad").value;
      var gender_value;
  
      if (document.getElementById("male").checked) {
      gender_value = document.getElementById("male").value;
     }
                      
      else if(document.getElementById("female").checked){
      gender_value = document.getElementById("female").value;
                      
     }else if(document.getElementById("other").checked){
      gender_value = document.getElementById("other").value;
                  
     }  
     localStorage.setItem("b6",gender_value);

}