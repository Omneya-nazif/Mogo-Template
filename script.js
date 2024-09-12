var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}




var num = 0;
var slider = document.getElementById("slider");
var p = document.getElementById("para7");
var quotes = [  "I Loved Your Work" , "Your work is nice" , "Amazing Job" , "Loved that" ];

function updateQuote() {

p.innerText = quotes[num] ;

console.log(quotes[num]);

}

function next() {
  num++;
  if (num >= quotes.length) {
    num = 0;
  }
  updateQuote();
  }

function prev(){
    num--;
    if (num < 0) {
        num = quotes.length - 1; 
    }   
      
    updateQuote();
    
}
var map = document.getElementById("map");

function openMap(){
  // if ( map.style.display = "none") {

    map.style.display = "block" ;
//   }
// else if(map.style.display = "block"){
//     map.style.display = "block" ; 
// }
}

function closeMap() {

    map.style.display = "none";
}