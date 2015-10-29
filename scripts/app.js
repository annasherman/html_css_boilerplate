// this is a comment. learning about load order.


  //objects have attributes and abilities !!!!
  window.onload = function(){
    //  alert('hey hey hey');
    statusReport('hey hey hey');

    var word1 = prompt('Give me a noun');
    var word2 = prompt('Length of time (hour, second, month, day, year, etc.)?');
    var word3 = prompt('A type of royalty?');
    var word4 = prompt('Choose a city, town, village, suburb, or other living construct');
    var word5 = prompt('A place name');
    var word6 = prompt('Choose a cardinal direction');
    var word7 = prompt('Major metropolitan area')
    var contentContainer = document.getElementById('content');

    contentContainer.innerHTML = "Now this is a story all about how <br> My " + word1 + " got flipped turned upside down <br>" +
    "And I'd like to take a " + word2 + " just sit right there <br> I'll tell you how I became the " + word3 + " of " + word4 + " called " +
    word5 + "<br> In " + word6 +" "+ word7 + " born and raised...."

    //Now, this is a story all about how
// My life got flipped-turned upside down
// And I'd like to take a minute
// Just sit right there
// I'll tell you how I became the prince of a town called Bel Air
//
// In west Philadelphia born and raised
// On the playground was where I spent most of my days
// Chillin' out maxin' relaxin' all cool
// And all shootin some b-ball outside of the school
// When a couple of guys who were up to no good
// Started making trouble in my neighborhood
// I got in one little fight and my mom got scared
// She said 'You're movin' with your auntie and uncle in Bel Air'
     //for gathering the HTML inside of the 'content'. if theres no content, we get an empty string.

  }
    function statusReport(message){
      console.log(message);
      return message;
    }
