
var Chatty = (function(newChatty){
  var textInput = document.getElementById('textInput');
  var messages = document.getElementById('messages');
  var navForm = document.getElementById('navForm');
  var clearBtn = document.getElementById('clearBtn');
  var largeText = document.getElementById("largeText");
  var inputString;
  var message;


  textInput.addEventListener("keydown", function(event) {

   if(event.keyCode == 13) {

    inputString =`<div><p class="message">${textInput.value}</p>`;
    inputString +=`<button class="btn btn-default">Delete</button></div>`;
    messages.innerHTML += inputString;
      if (largeText.checked) {
        message = document.getElementsByClassName("message");
        for (var i=0;i<message.length;i++){
          message[i].setAttribute("style","font-size: 32px;");
        }
      }
    textInput.value = "";
    clearBtn.disabled = false;
    };
  });

  clearBtn.addEventListener("click", function() {
    messages.innerHTML = "";
    clearBtn.disabled = true;
  });


  return newChatty;

})(Chatty||{});
