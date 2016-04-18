var Chatty = (function (originalChatty) {
  //load user radio 
  originalChatty.userButton= function(){

    // User object
    var users = {
    names: ["Xavier", "Joanna", "Mackenzie", "Gunter", "Iveta", "Sven"]
    };

    //loop through users
    $(users.names).each(function(i,element){
      $("#users").append("<div class='myRadioBtn'><input type='radio' name='user' id= user_"+i+" value="+element+"><label>"+element+"</label></div>");
    })
  };

  //loop through messages function - build DOM
  originalChatty.loopThrough= function(data){
    $(data).each(function(i,element){
      $("#messages").append("<div id= '"+i+"'></div>");
      $("#"+i).append("<span class='user_name'><b>"+element.user+":</b></span>");
      $("#"+i).append('<p class="message">'+ element.content+"</p>");
      $("#"+i).append('<p class="timestamp"><i>'+element.time+"</i></p>");
      $("#"+i).append('<button class="btn btn-default" id="editBtn">Edit</button>');
      $("#"+i).append('<button class="btn btn-default" id="delete">Delete</button>');
      $("#"+i).append("<br><br>");
    });
  };
    
  
  return originalChatty;
})(Chatty||{});

Chatty.userButton();
