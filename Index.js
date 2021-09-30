
function sim() {
    //var username = 'nini';
   var username = document.getElementById("name");

    //var email = 'jesse@gmail.com';
    var email = document.getElementById("email");
    //var password = 'Appke200';
   var password = document.getElementById("password");

    var url = "http://li-bum.herokuapp.com/api/register";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      alert (xhr.responseText);
      console.log(xhr.responseText);
   }};

    var dat = {"email":email.value,"username":username.value,"password":password.value};
    alert(data);
    var data = JSON.stringify(dat);
    xhr.send(data);
    alert(username);
    alert(email);
    alert(password);
    // body...
}
