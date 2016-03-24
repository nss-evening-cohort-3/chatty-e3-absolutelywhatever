
var Chatty = (function(newChatty){
  var textInput = document.getElementById('textInput');
  var messages = document.getElementById('messages');
  var navForm = document.getElementById('navForm');
  var clearBtn = document.getElementById('clearBtn');
  var editBtn = document.getElementById('editBtn');
  var inputString;

  function stringBuilder() {

    inputString =`<div><p class="message">${textInput.value}</p>`;
    inputString += `<button class="btn btn-default" id="editBtn">Edit</button>`;
    inputString +=`<button class="btn btn-default" id="delete">Delete</button></div>`;
    messages.innerHTML += inputString;
  }

  textInput.addEventListener("keydown", function(event) {

   if(event.keyCode == 13 && textInput.value != "") {
    stringBuilder();      
    if (largeText.checked) {
      message = document.getElementsByClassName("message");
      for (let i=0;i<message.length;i++){
        message[i].setAttribute("style","font-size: 32px;");
      }
    };
    textInput.value = "";
    clearBtn.disabled = false;
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
