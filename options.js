"use strict";
var navBar = document.getElementById("navForm")
var darkTheme = document.getElementById("darkTheme");
var largeText = document.getElementById("largeText");
var message;
var user_name;
var timestamp;

var Chatty = (function(chatty) {

  chatty.optionEvents = function(){
    darkTheme.addEventListener("click", function(){
      if (darkTheme.checked) {
        document.body.style.backgroundColor = "darkgray";
        document.body.style.color="white";
        navBar.classList.toggle("navbar-inverse");
      } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color="black";
        navBar.classList.toggle("navbar-inverse");
      };
    });
    largeText.addEventListener("click", function(){
      if (largeText.checked) {
        message = document.getElementsByClassName("message");
        for (let i=0;i<message.length;i++){
          message[i].setAttribute("style","font-size: 32px;");
        };
        //set user_name large
        user_name = document.getElementsByClassName("user_name");
        for (var i=0;i<user_name.length;i++){
          user_name[i].setAttribute("style","font-size: 32px;");
        };
        //set timestamp large
        timestamp = document.getElementsByClassName("timestamp");
        for (var i=0;i<timestamp.length;i++){
          timestamp[i].setAttribute("style","font-size: 30px;");
        };
      } else {
        message = document.getElementsByClassName("message");
        for (let i=0;i<message.length;i++){
          message[i].setAttribute("style","font-size: 14px;");
        };
        user_name = document.getElementsByClassName("user_name");
        for (var i=0;i<user_name.length;i++){
          user_name[i].setAttribute("style","font-size: 14px;");
        };
        timestamp = document.getElementsByClassName("timestamp");
        for (var i=0;i<timestamp.length;i++){
          timestamp[i].setAttribute("style","font-size: 10px;");
        };
      };
    });
  }
  
  return chatty;
})(Chatty || {});

Chatty.optionEvents();