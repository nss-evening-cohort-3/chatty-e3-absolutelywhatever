var Chatty = (function (originalChatty) {
  //load user radio 
  originalChatty.userButton= function(){
    // User object
    var users = {
    names: ["Xavier", "Joanna", "Mackenzie", "Gunter", "Iveta", "Sven"]
    };

    var string="<span>User Selection:</span>";
    for(var i=0; i<users.names.length; i++){
      string+= "<div class='myRadioBtn'><input type='radio' name='user' id= user_"+i+" value="+users.names[i]+">";
      string+="<label>"+users.names[i]+"</label></div>";
    }
    document.getElementById("users").innerHTML= string;
  }

  //loop through function- builds DOM from message array
  originalChatty.loopThrough= function(messageArray){
    var string="";
    for(var i=0; i<messageArray.length; i++){
      string+="<div><span class='user_name'><b>"+messageArray[i].user+":</b> </span>";
      string+= `<p class="message">${messageArray[i].content}</p>`;
      string+=`<p class="timestamp"><i>${messageArray[i].time}</i></p>`;
      string+= `<button class="btn btn-default" id="editBtn">Edit</button>`;
      string+=`<button class="btn btn-default" id="delete">Delete</button></div><br>`;
    }
    document.getElementById("messages").innerHTML = string;
  }
  return originalChatty;
})(Chatty||{});

Chatty.userButton();
