var nameVal = document.getElementById("name");
var emailVal = document.getElementById("email");
var letterVal = document.getElementById("letter");
var sendBtn = document.getElementById("send-btn");


sendBtn.addEventListener('click', sendLetter);

var clientMessage = '';
var clientName = '';

update();

async function update(){
  var clientName = nameVal.value;
  var clientMessage = 'Email: ' + emailVal.value + 'Letter: ' + letterVal.value + 'Lang: En';
  update = setInterval(update, 500);
}
 function sendLetter(){
 fetch('https://fchatiavi.herokuapp.com/send/iytter', {
   method: 'POST',
   body: JSON.stringify({
   Name: clientName,
   Message: clientMessage
      })
    });
}