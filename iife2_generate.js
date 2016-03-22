var Chatty = (function (originalChatty) {
  originalChatty.loopThrough= function(messageArray){
    var string="";
    for(var i=0; i<messageArray.length; i++){
      string+= `<div>${messageArray[i].content}`;
      string+=`<button class="btn btn-default">Delete</button></div>`;
    }
    document.getElementById("messages").innerHTML = string;
  }
  return originalChatty;
})(Chatty||{});
