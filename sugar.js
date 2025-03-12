function sendEmail() {
    var name = document.getElementById("name").value;
   var email = document.getElementById("email").value;
   var phone = document.getElementById("phone").value;
   var message = document.getElementById("message").value;
   
    var subject = "Application to Join";
    var body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0AMessage: ${message}`;
               
   window.location.href = `mailto:chaudharydevansh621@gmail.com?subject=${subject}&body=${body}`;
   }