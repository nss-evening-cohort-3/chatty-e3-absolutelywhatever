var Chatty = (function (originalChatty) {
  var messageArray=[];
  originalChatty.loadMessage= function(){
    var varMessages= new XMLHttpRequest();
    varMessages.addEventListener("load", function(){
      messageArray= JSON.parse(this.responseText).messages;
      Chatty.loopThrough(messageArray);
    });
    varMessages.open("GET", "load_messages.json");
    varMessages.send();
  }
  return originalChatty;
})(Chatty||{});

Chatty.loadMessage();