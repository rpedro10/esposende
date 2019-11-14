
 window.onscroll = function() {myFunction()};
function myFunction() {
  if (document.documentElement.scrollTop > 500) {
    document.getElementById("navbar").style.backgroundColor="rgba(0, 0, 0, 0.8)";
}
  if (document.documentElement.scrollTop < 500) {
    document.getElementById("navbar").style.backgroundColor="rgba(0, 0, 0, 0.2)";
} 
}