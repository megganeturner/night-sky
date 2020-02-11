// TODO refactor to remove jQuery
$(document).on("click", "#exit", function () {
  $(this).parent().html('');
  $(this).parent().fadeOut();
});


document.addEventListener('DOMContentLoaded', function() {
  const documentContainer = document.getElementById('container');

  loadJSON('js/data.json', function (data) {
    data.forEach((constellation) => {
      const constellationContainerEl = document.createElement('div');
      constellationContainerEl.id = constellation.name;
      constellationContainerEl.className = 'constellationContainer';

      const constellationEl = document.createElement('div');
      constellationEl.className = 'constellation';

      constellation.stars.forEach((star) => {
        const starEl = document.createElement('div');
        starEl.className = `star ${star.name}`;
        starEl.style.top = `${star.top}px`;
        starEl.style.left = `${star.left}px`;
        constellationEl.appendChild(starEl);

        starEl.onclick = function () {
          const starInfoContainer = document.getElementById('starinfo');

          const exitEl = document.createElement('div');
          exitEl.id = 'exit';
          const exitElSpan = document.createElement('span');
          exitElSpan.appendChild(document.createTextNode('x'));
          exitEl.appendChild(exitElSpan);

          const infoTitle = document.createElement('h4');
          infoTitle.appendChild(document.createTextNode(star.name));

          const infoDesc = document.createElement('p');
          infoDesc.appendChild(document.createTextNode(star.description));

          const infoTable = document.createElement('table');

          const apMagnitudeRow = document.createElement('tr');
          const apMagnitudeKey = document.createElement('td');
          const apMagnitudeVal = document.createElement('td');
          apMagnitudeKey.appendChild(document.createTextNode('Apparent Magnitude'));
          apMagnitudeVal.appendChild(document.createTextNode(star.apparentMagnitude));

          apMagnitudeRow.appendChild(apMagnitudeKey);
          apMagnitudeRow.appendChild(apMagnitudeVal);

          const specTypeRow = document.createElement('tr');
          const specTypeKey = document.createElement('td');
          const specTypeVal = document.createElement('td');
          specTypeKey.appendChild(document.createTextNode('Spectral Type'));
          specTypeVal.appendChild(document.createTextNode(star.spectralType));

          specTypeRow.appendChild(specTypeKey);
          specTypeRow.appendChild(specTypeVal);

          const massRow = document.createElement('tr');
          const massKey = document.createElement('td');
          const massVal = document.createElement('td');
          massKey.appendChild(document.createTextNode('Mass'));
          massVal.appendChild(document.createTextNode(`${star.mass ? star.mass : 'n/a'} Solar Masses`));

          massRow.appendChild(massKey);
          massRow.appendChild(massVal);

          const luminosityRow = document.createElement('tr');
          const luminosityKey = document.createElement('td');
          const luminosityVal = document.createElement('td');
          luminosityKey.appendChild(document.createTextNode('Luminosity'));
          luminosityVal.appendChild(document.createTextNode(star.luminosity ? star.luminosity : 'n/a'));

          luminosityRow.appendChild(luminosityKey);
          luminosityRow.appendChild(luminosityVal);

          const distanceRow = document.createElement('tr');
          const distanceKey = document.createElement('td');
          const distanceVal = document.createElement('td');
          distanceKey.appendChild(document.createTextNode('Distance from Earth'));
          distanceVal.appendChild(document.createTextNode(`${star.distanceFromEarth}ly`));

          distanceRow.appendChild(distanceKey);
          distanceRow.appendChild(distanceVal);

          const tempRow = document.createElement('tr');
          const tempKey = document.createElement('td');
          const tempVal = document.createElement('td');
          tempKey.appendChild(document.createTextNode('Temperature'));
          tempVal.appendChild(document.createTextNode(`${star.temperature}K`));

          tempRow.appendChild(tempKey);
          tempRow.appendChild(tempVal);


          infoTable.appendChild(apMagnitudeRow);
          infoTable.appendChild(specTypeRow);
          infoTable.appendChild(massRow);
          infoTable.appendChild(luminosityRow);
          infoTable.appendChild(distanceRow);
          infoTable.appendChild(tempRow);


          starInfoContainer.appendChild(exitEl);
          starInfoContainer.appendChild(infoTitle);
          starInfoContainer.appendChild(infoDesc);
          starInfoContainer.appendChild(infoTable);

          // TODO refactor to remove jQuery
          // starInfoContainer.style.display = 'block';
          $("#starinfo").show(2000);
        }

      });

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
  });
})

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



// TODO refactor to remove jQuery
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
