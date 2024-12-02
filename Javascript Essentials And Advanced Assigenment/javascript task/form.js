function reg_form(get) {

    document.getElementById("msg-1").style.color="red"

    if (get.uname.value == "") {
        document.getElementById("msg-1").innerHTML = "please enter some value in user name"
        get.uname.focus();
        return false;
    }
    if (!get.uname.value.match(/^[a-zA-Z]{1,}$/)) {

        document.getElementById("msg-1").innerHTML = "please enter some chracter value"
        get.uname.focus()
        return false;
    }

    if (get.lname.value == "") {
        document.getElementById("msg-1").innerHTML = "please enter some value in user name"
        get.lname.focus();
        return false;
    }
    if (!get.lname.value.match(/^[a-zA-Z]{1,}$/)) {

        document.getElementById("msg-1").innerHTML = "please enter some chracter value"
        get.lname.focus()
        return false;
    }
    if (get.pass.value == "") {

        document.getElementById("msg-1").innerHTML = "! please eneter some value in password"
        get.pass.focus()
        return false;
    }

    if (get.pass.value.length < 8) {
        document.getElementById("msg-1").innerHTML = "! Please enter minimum 8 digit length";
        get.pass.focus();
        return false;
    }

    if (get.email.value == "") {
        document.getElementById("msg-1").innerHTML = "please enter some value in email"
        get.email.focus()
        return false;
    }
    if (!get.email.value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/)) {
        document.getElementById("msg-1").innerHTML = "! please enter a correct email address"
        get.email.focus()
        return false;
    }

    if (get.num.value == "") {
        document.getElementById("msg-1").innerHTML = "Pease enter the some num in input"
        get.num.focus()
        return false;
    }

    if (!get.num.value.match(/^[0-9]{10}$/)) {
        document.getElementById("msg-1").innerHTML = "Pease enter the correct number"
        get.num.focus()
        return false;
    }

    var gen_arr = document.getElementsByName("gender");
    if (gen_arr[0].checked == true) {

    }
    else if (gen_arr[1].checked == true) {

    }
    else {
        document.getElementById("msg-1").innerHTML = "please slect gender"
        return false
    }

    if(get.dob.value==""){

        document.getElementById("msg-1").innerHTML = "choose date of birth"
        get.dob.focus()
        return false;
    }

    
    if(get.address.value==""){

        document.getElementById("msg-1").innerHTML = "! please fill the address"
        get.address.focus()
        return false;
    }
    if(get.country.value==""){

        document.getElementById("msg-1").innerHTML = "! please chooes Your country"
        get.country.focus()
        return false;
    }
    if(get.Ariapin.value==""){

        document.getElementById("msg-1").innerHTML = "! please fill the Areapin"
        get.Ariapin.focus()
        return false;
    }

   else{
    window.alert("form submited")
   }

}
