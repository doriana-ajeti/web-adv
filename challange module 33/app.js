
if (!(name.match(valid_name_regex)) || !(age.match(valid_age_regex)) || (city == "")){
    if(!(name.match(valid_name_regex))){
        document.getElementById("name_error").style.visibility = "visible";
        document.getElementById("name").style.borderColor = "red";
    }
    else{
        document.getElementById("name_error").style.visibility = "hidden";
        document.getElementById("name").style.borderColor = "black";
        }
    }

    if(!(age.match(valid_age_regex))){
         document.getElementById("age_error").style.visibility = "visible";
            document.getElementById("age").style.borderColor = "red"
    }
    else{
         document.getElementById("age_error").style.visibility = "hidden";
            document.getElementById("age").style.borderColor = "black";
    }

    if(!(Email.match(valid_email_regex))){
             document.getElementById("email_error").style.visibility = "visible";
            document.getElementById("email").style.borderColor = "red"
    }
    else{
         document.getElementById("email_error").style.visibility = "hidden";
            document.getElementById("email").style.borderColor = "black";
    }
    if(!(password.match)){
               document.getElementById("password_error").style.visibility = "visible";
            document.getElementById("password").style.borderColor = "red"
    }
    else{
         document.getElementById("password_error").style.visibility = "hidden";
            document.getElementById("password").style.borderColor = "black";
    }
    