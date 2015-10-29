// this is a comment. learning about load order.


  //objects have attributes and abilities !!!!
  window.onload = function(){
    //  alert('hey hey hey');
    statusReport('hey hey hey');

    var username = prompt('What is your name?');
    var mission = prompt('What is your mission?');
    var contentContainer = document.getElementById('content');

    contentContainer.innerHTML = username + ' is on a mission to ' + mission; 
     //for gathering the HTML inside of the 'content'. if theres no content, we get an empty string.

  }
    function statusReport(message){
      console.log(message);
      return message;
    }
