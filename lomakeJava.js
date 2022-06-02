function tarkista(){
var radionapit = formi.rate.value;
var radioTesti = false;
for(var i = 0; i < radionapit.length; i++) {
 if(radionapit[i].checked == true) {
   radioTesti = true;
   }
} if(radioTesti == false) {
 alert("Valitse tähti.");
}}
