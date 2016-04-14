// $(document).ready(function(){
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

  originalChatty.editMessageArray= function(i, message){
    messageArray[i].content= message;
  };

  // load starter messages from JSON
  originalChatty.loadMessage= function(){
    $.ajax({
      url: "load_messages.json"
    }).done(function(data){
      //set time
      Chatty.setTime(data.messages);
      //loop through
      Chatty.loopThrough(data.messages);
      //delete function
      $("#messages").click(Chatty.deleteButton);
    });
  };
  
  //setTime function
  originalChatty.setTime = function(data){
    $(data).each(function(i,element){
      element.time = new Date();
    });
  };

  //used for clicking "Clear Message" button
  originalChatty.clearMessageArray=function(){
    messageArray=[];
  }


  return originalChatty;
})(Chatty||{});

Chatty.loadMessage();

// });
