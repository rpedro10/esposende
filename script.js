window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 455) {
    document.getElementById("navbar").style.backgroundColor="lightgrey";
}
  if (document.documentElement.scrollTop < 455) {
    document.getElementById("navbar").style.backgroundColor="transparent";
} 
}
/** COUNTER */
// Set the date we're counting down to
var countDownDate = new Date("May 5, 2020 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  /**document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";*/
  document.getElementsByClassName("days").innerHTML = days ;
  var clock = document.getElementById('clockdiv');
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  //var secondsSpan = clock.querySelector('.seconds');

  daysSpan.innerHTML = days;
  hoursSpan.innerHTML = hours;
  minutesSpan.innerHTML = minutes;

    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
/***************** */
//map
// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: 41.5165939, lng: -8.7853508};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}