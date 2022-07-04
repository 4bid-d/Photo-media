function validateForm() {
    var name =  document.getElementById('name').value;
    if (name == "") {
        window.alert("Name cannot be empty");
        return false;
    }
    var email =  document.getElementById('email').value;
    if (email == "") {
        window.alert("Email cannot be empty");
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            window.alert("Email format invalid");
            return false;
        }
    }
    var subject =  document.getElementById('subject').value;
    if (subject == "") {
        window.alert("Subject cannot be empty");
        return false;
    }
    var message =  document.getElementById('message').value;
    if (message == "") {
        window.alert("Message cannot be empty");
        return false;
    }
    document.querySelector('.status').innerHTML = "Sending...";
    if(name==true && email==true && subject==true && massage==true){
        document.getElementById('contact-form').submit();
    }else{
        window.alert("submit error");
    }
    
  } 

  