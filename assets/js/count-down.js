/* Latest compiled and minified JavaScript included as External Resource */
var doubleDigit = function(num){
	if (num < 10 && num >= 0){
  	var result = '0' + num;
  	return result;
  } 
  else {
  	return num;
  }
}

$('document').ready(function(){
	var eventDate = new Date(2016, 10, 24, 0, 0, 0).getTime();
  var currentTime, timeDiff, timeLeft;
  var updateClock = function(){
  	currentTime = (new Date()).getTime();
    timeDiff = eventDate - currentTime;
    timeLeft = new Date(timeDiff)
    console.log(timeLeft);
    $("#days > .number").text(doubleDigit((timeLeft.getMonth()-1)*30 + timeLeft.getDate()));
    $("#hours > .number").text(doubleDigit(timeLeft.getHours()));
    $("#minutes > .number").text(doubleDigit(timeLeft.getMinutes()));
    $("#seconds > .number").text(doubleDigit(timeLeft.getSeconds()));
  };
  updateClock();
  setInterval(updateClock, 1000);
});