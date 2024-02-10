function test()
{
    //Fname
    var fn=document.getElementById("fname").value;
    if(fn==""){
        document.getElementById("fnameError").innerHTML="Enter the first name!";
        document.getElementById("fnameError").style.display="block";
        return false;
    }
    else{
        document.getElementById("fnameError").style.display="none";
    }
    //Lname
    var ln=document.getElementById("lname").value;
    if(ln==""){
        document.getElementById("lnameError").innerHTML="Enter the last name!";
        document.getElementById("lnameError").style.display="block";
        return false;
    }
    else{
        document.getElementById("lnameError").style.display="none";
    }
    
    //phone no

    var ph = document.getElementById("mobile").value;
    if(!phonenumber(ph)){
        return false;
    };

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
    //title
    var fn=document.getElementById("title").value;
    if(fn==""){
        document.getElementById("TError").innerHTML="Enter title";
        document.getElementById("TError").style.display="block";
        return false;
    }
    else{
        document.getElementById("TError").style.display="none";
    }
    //country
    var fn=document.getElementById("country").value;
    if(fn==""){
        document.getElementById("CError").innerHTML="Enter Country";
        document.getElementById("CError").style.display="block";
        return false;
    }
    else{
        document.getElementById("CError").style.display="none";
    }
    //state
    var fn=document.getElementById("state").value;
    if(fn==""){
        document.getElementById("SError").innerHTML="Enter State ";
        document.getElementById("SError").style.display="block";
        return false;
    }
    else{
        document.getElementById("SError").style.display="none";
    }

    //zip
    var z = document.getElementById("zip").value;
    if(!zipeer(z)){
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
    document.getElementById("MError").innerHTML ="Invalid";
    document.getElementById("MError").style.display ="block";
    return false;
   }
}

function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test( $email );
}
function zipeer(inputtxt)
{
  var phoneno = /^\d{7}$/;
  if(inputtxt.match(phoneno)){
      document.getElementById("ZError").style.display="none";
      return true;
   }
   else{
    document.getElementById("ZError").innerHTML ="Invalid Zip";
    document.getElementById("ZError").style.display ="block";
    return false;
   }
}