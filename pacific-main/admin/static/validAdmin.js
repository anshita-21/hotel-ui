function test()
{
    //Hotel name
    var fn=document.getElementById("fname").value;
    if(fn==""){
        document.getElementById("fnameError").innerHTML="Enter the Hotel Name!";
        document.getElementById("fnameError").style.display="block";
        return false;
    }
    else{
        document.getElementById("fnameError").style.display="none";
    }
    //tagline
    var ln=document.getElementById("lname").value;
    if(ln==""){
        document.getElementById("lnameError").innerHTML="Enter the Tagline!";
        document.getElementById("lnameError").style.display="block";
        return false;
    }
    else{
        document.getElementById("lnameError").style.display="none";
    }
     //city
     var fn=document.getElementById("city").value;
     if(fn==""){
         document.getElementById("cityE").innerHTML="Enter City";
         document.getElementById("cityE").style.display="block";
         return false;
     }
     else{
         document.getElementById("cityE").style.display="none";
     }

    //description
    var fn=document.getElementById("des").value;
    if(fn==""){
        document.getElementById("desE").innerHTML="Enter the Hotel Description !";
        document.getElementById("desE").style.display="block";
        return false;
    }
    else{
        document.getElementById("desE").style.display="none";
    }

    //address
    var fn=document.getElementById("address").value;
    if(fn==""){
        document.getElementById("AError").innerHTML="Enter address";
        document.getElementById("AError").style.display="block";
        return false;
    }
    else{
        document.getElementById("AError").style.display="none";
    }

    //email
    var email = document.getElementById("email").value;
    if (email == null || email == "") {  
        document.getElementById("EError").innerHTML = "Invalid email";
        document.getElementById("EError").style.display = "block";
        return false;
    } 
    
    if( !validateEmail(email)) { 
        document.getElementById("EError").innerHTML = "Invalid format!";
        document.getElementById("EError").style.display = "block";
        return false;
    }
    else{
        document.getElementById("EError").style.display="none";
    }
    //phone no

    var ph = document.getElementById("mobile").value;
    if(!phonenumber(ph)){
        return false;
    };
     //email1
     var email = document.getElementById("email1").value;
     if (email == null || email == "") {  
         document.getElementById("EError1").innerHTML = "Invalid email";
         document.getElementById("EError1").style.display = "block";
         return false;
     } 
     
     if( !validateEmail1(email)) { 
         document.getElementById("EError1").innerHTML = "Invalid format!";
         document.getElementById("EError1").style.display = "block";
         return false;
     }
     else{
         document.getElementById("EError1").style.display="none";
     }
     //phone no1
 
     var ph = document.getElementById("mobile1").value;
     if(!phonenumber1(ph)){
         return false;
     };
    
}

function phonenumber(inputtxt)
{
  var phoneno = /^\d{10}$/;
  if(inputtxt.match(phoneno)){
      document.getElementById("MError").style.display="none";
      return true;
   }
   else{
    document.getElementById("MError").innerHTML ="Invalid Contact";
    document.getElementById("MError").style.display ="block";
    return false;
   }
}

function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test( $email );
}

function phonenumber1(inputtxt)
{
  var phoneno = /^\d{10}$/;
  if(inputtxt.match(phoneno)){
      document.getElementById("MError1").style.display="none";
      return true;
   }
   else{
    document.getElementById("MError1").innerHTML ="Invalid Contact";
    document.getElementById("MError1").style.display ="block";
    return false;
   }
}

function validateEmail1($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test( $email );
}
