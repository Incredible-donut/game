var nameVal = document.getElementById("name");
var emailVal = document.getElementById("email");
var letterVal = document.getElementById("letter");
var sendBtn = document.getElementById("send-btn");


sendBtn.addEventListener('click', sendLetter);

var message;
var name;

update();

async function update(){
  var name = nameVal.value;
  var message = 'Email: ' + emailVal.value + 'Letter: ' + letterVal.value;
  update = setInterval(update, 500);
}
 function sendLetter(){
 fetch('https://fchatiavi.herokuapp.com/send/iytter', {
   method: 'POST',
   body: JSON.stringify({
   Name: 'name',
   Message: 'message'
      })
    });
}
/*fetch(`https://fchatiavi.herokuapp.com/get/iytter/?offset=0&limit=10000`) */
