var Chatty = (function (originalChatty) {
  originalChatty.deleteButton= function(event){
    this.removeChild(event.target.parentNode);
  }
  return originalChatty;
})(Chatty||{});