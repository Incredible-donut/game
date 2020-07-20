var nameVal = document.getElementById("name");
var emailVal = document.getElementById("email");
var letterVal = document.getElementById("letter");
var sendBtn = document.getElementById("send-btn");


sendBtn.addEventListener('click', sendLetter);

 function sendLetter(){
    var clientName = '';
    clientName = nameVal.value;
    var clientMessage = '';
    clientMessage = `Email: ${emailVal.value} Letter: ${letterVal.value}`;
 fetch('https://fchatiavi.herokuapp.com/send/iytter', {
   method: 'POST',
   body: JSON.stringify({
   Name: 'Name' + document.getElementById("name").value,
   Message: 'Email:' + document.getElementById("email").value + 'Leter' + document.getElementById("letter").value
      })
    });
}
/*fetch(`https://fchatiavi.herokuapp.com/get/iytter/?offset=0&limit=1000000`) */

