function register() {
    var formData = document.querySelector('#myForm');
    var myObject = {};
    for (var i = 0; i < formData.length; i++) {
        if(formData[i].checked) {
          document.querySelector("#gender").innerHTML = formData[i].value;
    }
        myObject[formData[i].name] = formData[i].value;
    }
    document.querySelector("#fname").innerHTML = myObject.uName;
    document.querySelector("#lname").innerHTML = myObject.password;
    document.querySelector("#email").innerHTML = myObject.email;
    document.querySelector("#qualification").innerHTML = myObject.qualification;
}

let greetings = (greet) => {
    document.querySelector("#greeting").innerHTML = `${greet} Priyanka`;
}
