// Get the modal
let modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }

//  ################# TOGGLE PASSWORD LOGIN SECTION ######################

let togglePassword = document.getElementById("togglePassword");
let password = document.getElementById("password");

togglePassword.addEventListener("click",function(){
    let type = password.getAttribute("type")=="password"?"text":"password";
    password.setAttribute("type",type);
    this.classList.toggle("fa-eye-slash");
});




// ############################# FORM VALIDATION #############################

let name = document.getElementById("name");
// let password = document.getElementById("password");

name.addEventListener("blur",function(){
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    if(regex.test(str)){
        name.style.border = "1px solid white";
        wrong1.style.display = "none";
    }
    else{
        name.style.border = "1px solid red";
        wrong1.style.display = "block";
    }
});


password.addEventListener("blur",function(){
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = password.value;
    if(regex.test(str)){
        password.style.border = "1px solid white";
        wrong2.style.display = "none";
    }
    else{
        password.style.border = "1px solid red";
        wrong2.style.display = "block";
    }
});


// ######################## CONTACT FORM VALIDATION ###################################
let contactName = document.getElementById("contactName");
let contactEmail = document.getElementById("contactEmail");

contactName.addEventListener("blur",function(){
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = contactName.value;
    if(regex.test(str)){
        contactName.style.border = "1px solid white";
        wrong3.style.display = "none";
    }
    else{
        contactName.style.border = "1px solid red";
        wrong3.style.display = "block";
    }
});

contactEmail.addEventListener("blur",function(){
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]}){2,7}$/;
    let str = contactEmail.value;
    if(regex.test(str)){
        contactEmail.style.border = "1px solid white";
        wrong3.style.display = "none";
    }
    else{
        contactEmail.style.border = "1px solid red";
        wrong4.style.display = "block";
    }
});
