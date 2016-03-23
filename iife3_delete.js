var Chatty = (function (originalChatty) {
  originalChatty.deleteButton= function(event){
    if(event.target.id ==="delete") {
    this.removeChild(event.target.parentNode);
  }
}
  return originalChatty;
})(Chatty||{});