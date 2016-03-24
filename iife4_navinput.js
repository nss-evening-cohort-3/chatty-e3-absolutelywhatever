
var Chatty = (function(newChatty){
  var textInput = document.getElementById('textInput');
  var messages = document.getElementById('messages');
  var navForm = document.getElementById('navForm');
  var clearBtn = document.getElementById('clearBtn');
  var editBtn = document.getElementById('editBtn');
  var stagedForEdit = [];
  var newMessage = {};
  var inputString;


  function stringBuilder() {
    newMessage.content = textInput.value;
    Chatty.setMessages(newMessage);
    Chatty.loopThrough(Chatty.getMessages());
  }

  textInput.addEventListener("keydown", function(event) {

   if(event.keyCode == 13 && textInput.value != "") {
    stagedForEdit = [];
    stagedForEdit = document.getElementsByClassName("editing");
    if (stagedForEdit.length == 1) {
      stagedForEdit[0].firstChild.innerHTML = textInput.value;
    } else {
      stringBuilder();      
      if (largeText.checked) {
        message = document.getElementsByClassName("message");
        for (let i=0;i<message.length;i++){
          message[i].setAttribute("style","font-size: 32px;");
        }
      };
      textInput.value = "";
      clearBtn.disabled = false;
      }
    } else if(event.keyCode == 13 && textInput.value == ""){
      alert("Please enter a message.");
    };
  });

  messages.addEventListener("click", function() {
    if (event.target.id === "editBtn") {
      event.target.parentNode.classList.add('editing');
      textInput.value = event.target.parentNode.firstChild.innerHTML;
  }
  });

  clearBtn.addEventListener("click", function() {
    messages.innerHTML = "";
    clearBtn.disabled = true;
  });


  return newChatty;

})(Chatty||{});
