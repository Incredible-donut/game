var nameVal = document.getElementById("name");
var emailVal = document.getElementById("email");
var letterVal = document.getElementById("letter");
var sendBtn = document.getElementById("send-btn");


sendBtn.addEventListener('click', sendLetter);

update();
async function update(){
  var clientMessage = String('');
  var clientName = String('');
  var clientName = nameVal.value;
  var clientMessage = `Email: ${emailVal.value} Letter: ${letterVal.value}`;
  update = setInterval(update, 500);
}
 function sendLetter(){
   var clientNameForSending = String(clientName);
   var clientMessageForSending = String(clientMessage);
 fetch('https://fchatiavi.herokuapp.com/send/iytter', {
   method: 'POST',
   body: JSON.stringify({
   Name: clientNameForSending,
   Message: clientMessageForSending,
      })
    });
}
/*fetch(`https://fchatiavi.herokuapp.com/get/iytter/?offset=0&limit=10000`) */

