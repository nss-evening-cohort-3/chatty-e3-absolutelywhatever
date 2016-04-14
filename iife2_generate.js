var Chatty = (function (originalChatty) {
  //load user radio 
  originalChatty.userButton= function(){

    // User object
    var users = {
    names: ["Xavier", "Joanna", "Mackenzie", "Gunter", "Iveta", "Sven"]
    };

    //loop through users
    $(users.names).each(function(i,element){
      $("#users").append("<div class='myRadioBtn'><input type='radio' name='user' id= user_"+i+" value="+element+">");
      $("#users").append("<label>"+element+"</label></div>");
    })
  };

  //loop through messages function - build DOM
  originalChatty.loopThrough= function(data){
    $(data).each(function(i,element){
      $("#messages").append("<div><span class='user_name'><b>"+element.user+":</b></span>");
      $("#messages").append('<p class="message">'+ element.content+"</p>");
      $("#messages").append('<p class="timestamp"><i>'+element.time+"</i></p>");
      $("#messages").append('<button class="btn btn-default" id="editBtn">Edit</button>');
      $("#messages").append('<button class="btn btn-default" id="delete">Delete</button></div><br><br>');
    });
  };
    
  
  return originalChatty;
})(Chatty||{});

Chatty.userButton();
