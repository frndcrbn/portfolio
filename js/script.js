function validation(){
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var msg = document.getElementById('msg').value;
  var error_message = document.getElementById('error_message');

  error_message.style.padding = "10px";
  error_message.style.background = "red";

  if(name.length < 5){
    text = "Please Enter Valid Name";
    error_message.innerHTML = text;
    return false;
  }

  if(email.indexOf("@") == -1 || email.lenght < 6){
    text = "Please Enter Email";
    error_message.innerHTML = text;
    return false;
  }

  if(msg.length <= 20){
    text = "Please Enter More Than 20 Characters";
    error_message.innerHTML = text;
    return false;
  }

  Email.send({
    Host: "smtp.yoursip,com",
    Username: "username",
    Password: "password",
    To: "them@website.com",
    From: "you@isp.com",
    Subject: "This is the Subject",
    Body: "And this is the body"
  }).then(
    message => alert(message)
  );

  alert("Form Submitted Successfully!");
  return true;
}
