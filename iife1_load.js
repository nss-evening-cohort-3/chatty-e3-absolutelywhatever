var Chatty = (function (originalChatty) {

  //private variable to hold all messages
  var messageArray=[];

  //getter (this is useless)
  originalChatty.getMessages = function(){
    return messageArray;
  };

  //setter, with message limit of 20
  originalChatty.setMessages = function(message){
    messageArray.push(message);
    if (messageArray.length > 20) {
      messageArray.shift();
    };
  };

  // load starter messages from JSON
  originalChatty.loadMessage= function(){
    var varMessages= new XMLHttpRequest();
    varMessages.addEventListener("load", function(){
      messageArray= JSON.parse(this.responseText).messages;
      //Loop Through Function
      Chatty.loopThrough(messageArray);
      //Delete Button Function
      document.getElementById("messages").addEventListener("click", Chatty.deleteButton);
    });
    varMessages.open("GET", "load_messages.json");
    varMessages.send();
  }

  //used for clicking "Clear Message" button
  originalChatty.clearMessageArray=function(){
    messageArray=[];
  }

  return originalChatty;
})(Chatty||{});

Chatty.loadMessage();