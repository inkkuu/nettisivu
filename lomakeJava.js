function tarkista(formi){
var email = formi.email.value;
var radionapit = formi.rate.value;

var ehdot = /\S+@\S+/;
  if(!ehdot.test(email))
  {
    alert("Sähköpostisi ei ollut kunnollinen");
    return false;
  }
  var vastaus = false;

for(var i = 0; i < radionapit.length; i++)
   {
     if(radionapits[i].checked == true)
     {
       vastaus = true;
     }
   }
   if(vastaus == false)
   {
     alert('Et ole valinnut tähteä');
     return false;
   }
