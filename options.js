"use strict";
var navBar = document.getElementById("navForm")
var darkTheme = document.getElementById("darkTheme");
var largeText = document.getElementById("largeText");
// console.log("font", messages.style.fontSize);
var message;

var Chatty = (function(chatty) {
  chatty.optionEvents = function(){
    darkTheme.addEventListener("click", function(){
      if (darkTheme.checked) {
        document.body.style.backgroundColor = "darkgray";
        navBar.classList.toggle("navbar-inverse");
      } else {
        document.body.style.backgroundColor = "white";
        navBar.classList.toggle("navbar-inverse");
      };
    });
    largeText.addEventListener("click", function(){
      if (largeText.checked) {
        message = document.getElementsByClassName("message");
        for (let i=0;i<message.length;i++){
          message[i].setAttribute("style","font-size: 32px;");
        };
      } else {
        message = document.getElementsByClassName("message");
        for (let i=0;i<message.length;i++){
          message[i].setAttribute("style","font-size: 14px;");
        };
      };
    });
  }
  
  return chatty;
})(Chatty || {});

Chatty.optionEvents();