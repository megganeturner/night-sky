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


document.addEventListener("DOMContentLoaded", function() {
  const documentContainer = document.getElementById("container");

  loadJSON('js/data.json', function (data) {
    console.log('data', data);
    data.forEach((constellation) => {
      const constellationContainerEl = document.createElement('div');
      constellationContainerEl.id = constellation.name;

      const constellationEl = document.createElement('div');
      constellationEl.className = 'constellation';

      const infoContainerEl = document.createElement('div');
      infoContainerEl.className = 'info';

      const titleEl = document.createElement('h3');
      titleEl.appendChild(document.createTextNode(constellation.name));

      const infoEl = document.createElement('p');
      infoEl.appendChild(document.createTextNode(constellation.description));

      infoContainerEl.appendChild(titleEl);
      infoContainerEl.appendChild(infoEl);
      constellationContainerEl.appendChild(constellationEl);
      constellationContainerEl.appendChild(infoContainerEl);

      documentContainer.appendChild(constellationContainerEl);
    })

    // data.forEach((project) => {
    //   const projectEl = document.createElement('div');
    //   projectEl.className = 'project';
    //
    //   const imageLink = document.createElement('a');
    //   imageLink.setAttribute('href', project.siteLink);
    //   imageLink.setAttribute('target', '_blank');
    //
    //   const imageEl = document.createElement('img');
    //   imageEl.setAttribute('src', project.imgSrc);
    //   imageEl.className = 'featureImage';
    //   imageLink.appendChild(imageEl);
    //
    //   const descEl = document.createElement('p');
    //   descEl.appendChild(document.createTextNode(project.description));
    //
    //   rightCol.appendChild(descEl);
    //   rightCol.appendChild(linksEl);
    //
    //   projectList.appendChild(projectEl);
    // });
  });
})


// if (window.pageXOffset == 5px){
//    window.scrollBy(100vw, 0);
// }

function loadJSON(url, callback) {
  const request = new XMLHttpRequest();
  request.open('GET', url, true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      const data = JSON.parse(request.responseText);
      return callback(data);
    } else {
      console.log('We reached our target server, but it returned an error');
    }
  }
  request.onerror = function() {
    console.log('There was a connection error of some sort');
  };
  request.send();
}




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
