function validation(){
    if(document.formsf.Username.value==""){
        document.getElementById("result").innerHTML="*Enter Username";
        return false;
    }

    else if(document.formsf.Username.value<3){
        document.getElementById("result").innerHTML="*Atleast 3 characters";
        return false;
    } 

    else if(document.formsf.Email.value==""){
        document.getElementById("result").innerHTML="*Enter Email";
        return false;
    } 

    else if(document.formsf.Password.value==""){
        document.getElementById("result").innerHTML="*Enter Password";
        return false;
    } 

    else if(document.formsf.cPassword.value==""){
        document.getElementById("result").innerHTML="*Enter Confirm Password";
        return false;
    } 

    else if(document.formsf.Password.value!==document.formsf.cPassword.value){
        document.getElementById("result").innerHTML="*Password does not match";
        return false;
    } 

    else if (!/[A-Z]/.test(document.formsf.Password.value)) {
        document.getElementById("result").innerHTML = "*Password must contain at least one uppercase letter";
        return false;
    } 

    else if (!/[a-z]/.test(document.formsf.Password.value)) {
        document.getElementById("result").innerHTML = "*Password must contain at least one lowercase letter";
        return false;
    } 

    else if (!/\d/.test(document.formsf.Password.value)) {
        document.getElementById("result").innerHTML = "*Password must contain at least one digit";
        return false;
    } 

    else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?/~`\-='"\\|]/.test(document.formsf.Password.value)) {
        document.getElementById("result").innerHTML = "*Password must contain at least one symbol";
        return false;
    } 


    else if(document.formsf.Password.value.length<8){
        document.getElementById("result").innerHTML="*Password must be 8 digits";
        return false;
    }   

    else if(/\s/.test(document.formsf.Password.value)) {
        document.getElementById("result").innerHTML = "*Password must not contain any space";
        return false;
    } 

    else if(document.formsf.Password.value==document.formsf.cPassword.value){
        popup.classList.add("open-slide")
        return false;
    }  

   

}

var popup = document.getElementById("popup");
function CloseSlide(){
    popup.classList.remove('')
}