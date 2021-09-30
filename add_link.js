var url = "http://li-bum.herokuapp.com/api/links";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("Authorization", "Token 6c33564766e3a340b92d6731286130841877b280");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

var data = '{"url":"sim.com","info":"import"}';

xhr.send(data);