// $(document).on("click", "#exit", function () {
//    $(this).parent().fadeOut();
// });

// $(".star").hover(function(){
//    $("#moreinfo").show(1000);
//    }, function(){
//    $("#moreinfo").fadeOut();
// });
//
//
// $(".lambda-piscium").click(function(){
//    $("#starinfo").html("<div id ='exit'><span>x</span></div><h4>Lambda Piscium</h4><p>Lambda Piscium is a bluish white star which forms the southeast corner of the 'Circlet' in Pisces.</p><table><tr><td>Apparent Magnitude</td><td>4.49</td></tr><tr><td>Spectral type</td><td>A7V</td></tr><tr><td>Mass</td><td>1.806</td></tr><tr><td>Luminosity</td><td>13 Solar Luminosity</td></tr><tr><td>Distance from Earth</td><td>101ly / 30.9pc</td></tr><tr><td>Temperature</td><td>7,734 K</td></tr></table>")
//       .show(3000);
// });
let data = {}
$.getJSON('js/data.json', function (response) {
  data = response;
  console.log(data);
  for (var key in data) {
    var constellation = data[key];
    
    console.log(constellation);
  }
});

$(document).ready(function() {
  console.log(data);
})


// if (window.pageXOffset == 5px){
//    window.scrollBy(100vw, 0);
// }




$(function() {
   $('nav a').bind('click',function(event){
      var $anchor = $(this);
      /*
      if you want to use one of the easing effects:
      $('html, body').stop().animate({
         scrollLeft: $($anchor.attr('href')).offset().left
      }, 1500,'easeInOutExpo');
       */
      $('html, body').stop().animate({
         scrollLeft: $($anchor.attr('href')).offset().left
      }, 1000);
      event.preventDefault();
   });
});
