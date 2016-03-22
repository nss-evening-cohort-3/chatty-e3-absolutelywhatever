"use strict";
var darkTheme = document.getElementById("darkTheme");
var largeText = document.getElementById("largeText");
var Chatty = (function(chatty) {

  chatty.optionEvents = function(){
    darkTheme.addEventListener("click", function(){
      if (darkTheme.checked) {
        document.body.style.backgroundColor = "darkgray";
      } else {
        document.body.style.backgroundColor = "white";
      };
    });
    largeText.addEventListener("click", function(){
      if (largeText.checked) {
        console.log("Large text checked");
      } else {
        console.log("Large text unchecked");
      };
    });
  }
  
  return chatty;
})(Chatty || {});

Chatty.optionEvents();