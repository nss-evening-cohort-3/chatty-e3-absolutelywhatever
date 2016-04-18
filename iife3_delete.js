var Chatty = (function (originalChatty) {
  originalChatty.deleteButton= function(event){
    if(event.target.id ==="delete") {
    $(event.target.parentNode).empty();
  }
}
  return originalChatty;
})(Chatty||{});