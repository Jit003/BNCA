function nameValidate(id) {
    var regName = /^[a-zA-Z]+$/;
    var msg = "";
    
    if (id=="firstName") {
        msg = document.getElementById('fname-msg');
    } else {
        msg = document.getElementById('lname-msg');
    }

    id = document.getElementById(id);
    
    if (id.value == "" || id.value == undefined){
        msg.style.display="none";
    } else {
        if(!regName.test(id.value)) {
            msg.innerHTML="Invalid!";
            msg.style.display="block";
            msg.style.color="red";
        } else {
                msg.style.display="block";
                msg.style.color="green";
                msg.innerHTML="Valid!";
        }
    }
}

function validateEmail(){
    
}