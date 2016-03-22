var Chatty = (function (originalChatty) {
  var messageArray=[];
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
  return originalChatty;
})(Chatty||{});

Chatty.loadMessage();