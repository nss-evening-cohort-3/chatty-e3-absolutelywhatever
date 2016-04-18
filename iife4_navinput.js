
var Chatty = (function(newChatty){
  var textInput = $('#textInput');
  var messages = $('#messages');
  var navForm = $('#navForm');
  var clearBtn = $('#clearBtn');
  var editBtn = $('#editBtn');
  var stagedForEdit = [];
  var newMessage = {};
  var inputString;

  //add new messages to message array and send them to the DOM.
  function stringBuilder() {
    newMessage.content = textInput.value;
    //set time value
    newMessage.time = new Date();

    //set user value
    var userArray = document.getElementsByName("user");
    for(var i=0; i<userArray.length; i++){
      if(userArray[i].checked){
        newMessage.user= userArray[i].value;
      } else {
        newMessage.user= "Matt";
      }
    }

    Chatty.setMessages(newMessage);
    Chatty.loopThrough(Chatty.getMessages());
    //break the connection between textInput.value and newMessage.content, so that the next input will not be effected
    newMessage={};
  }

  //event listeners for enter key
  textInput.keydown(function(event) {

    //if enter is pressed and the text input has text in it...
    if(event.keyCode == 13 && textInput.value != "") {
      // clear the staged-for-edit array
      var stagedForEdit = [];
      //and add the selected message to the array
      stagedForEdit = document.getElementsByClassName("editing");
      //if anything is staged for edit...
      if (stagedForEdit.length == 1) {
        //set the staged message's text to that of the text input.
        stagedForEdit[0].childNodes[1].innerHTML = textInput.value;
    
        //save the input value back to messageArray
        //first step: find the index
        var messClass=[];
        var j;
        messClass= document.getElementsByClassName("message");
        for(var i=0; i<messClass.length; i++){
          if(messClass[i].parentNode.classList.contains("editing")){
            j=i;
          }
        }
        //second step: call the editMessageArray function
        Chatty.editMessageArray(j, textInput.value);

        //clear input box, "editing" class, and colored button
        textInput.value="";
        stagedForEdit[0].classList.remove("editing");
        document.getElementsByClassName("btn-info")[0].classList.remove("btn-info");

      //OR if nothing is staged for edit...
      } else {
        //add the textInput text to the DOM.
        stringBuilder();  

        //if LargeText is checked, ensure that the new message, user name and timestamp comes out large 
        if (largeText.checked) {
          message = document.getElementsByClassName("message");
          for (var i=0;i<message.length;i++){
            message[i].setAttribute("style","font-size: 32px;");
          }
          user_name = document.getElementsByClassName("user_name");
          for (var i=0;i<user_name.length;i++){
            user_name[i].setAttribute("style","font-size: 32px;");
          }
          timestamp = document.getElementsByClassName("timestamp");
          for (var i=0;i<timestamp.length;i++){
            timestamp[i].setAttribute("style","font-size: 30px;");
          }
        };
        //clear the text input and disable the clear button
        textInput.value = "";
        clearBtn.disabled = false;
        }
      //if enter is pressed and there is nothing in the text input, pop up an alert.
      } else if(event.keyCode == 13 && textInput.value == ""){
        alert("Please enter a message.");
        };
  });

  //edit button event listener
  messages.click(function() {
    if (event.target.id === "editBtn") {
      textInput.focus();
      event.target.classList.add("btn-info");
      event.target.parentNode.classList.add('editing');
      textInput.value = event.target.parentNode.childNodes[1].innerHTML;
  }
  });


  //clear button event listener
  clearBtn.click(function() {
    $(messages).html("");
    Chatty.clearMessageArray();
    clearBtn.disabled = true;
  });

  return newChatty;

})(Chatty||{});
