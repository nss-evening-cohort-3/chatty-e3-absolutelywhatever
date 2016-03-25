var Chatty = (function (originalChatty) {
  //loop through function- builds DOM from message array
  originalChatty.loopThrough= function(messageArray){
    var string="";
    for(var i=0; i<messageArray.length; i++){
      string+= `<div><p class="message">${messageArray[i].content}</p>`;
      string+=`<p class="timestamp"><i>${messageArray[i].time}</i></p>`;
      string+= `<button class="btn btn-default" id="editBtn">Edit</button>`;
      string+=`<button class="btn btn-default" id="delete">Delete</button></div><br>`;
    }
    document.getElementById("messages").innerHTML = string;
  }
  return originalChatty;
})(Chatty||{});
