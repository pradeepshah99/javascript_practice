// testing the validation part here. 

function validateForm() {
  
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let password = document.getElementById('pwd').value
    let mobile = document.getElementById('mobile').value





    if (name == "" || name==null) {
        alert("Name must be filled out");
        
    }
    else if (email == "" || email == null) {
        alert("Email must be filled out");

    }
    else if (password == "" || password == null) {
        alert("Password must be filled out");

    }
    else if (password == "" || password == null) 
    {
        alert("Mobile must be filled out");
    }
    else
    {
        document.getElementById('showname').innerHTML = name;
        document.getElementById('showEmail').innerHTML = email;
        document.getElementById('password').innerHTML = password;

        document.getElementById('shownunber').innerHTML = mobile;

    }
    

    
}