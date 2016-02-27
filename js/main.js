$(".botein").click(function(){
   $("#starinfo").html("<p class='exit'>x</p><h4>Botein</h4><p>Botein is a star in the northern constellation Aries. The name is derived from the Arabic word for 'belly'.</p><table><tr><td>Apparent Magnitude</td><td>4.349</td></tr><tr><td>Spectral type</td><td>K2 III</td></tr><tr><td>Mass</td><td>1.91 Mol</td></tr><tr><td>Luminosity</td><td>45</td></tr><tr><td>Distance from Earth</td><td>170ly / 52pc</td></tr><tr><td>Temperature</td><td>4810 K</td></tr></table>")
      .fadeIn(3000);
});

$(".hamal").click(function(){
   $("#starinfo").html("<h4>Hamal</h4><p>Hamal is the brightest star in the Aries constellation, and among the brightest stars in the night sky. It is a giant star that may host an orbiting planet with a mass greater than Jupiter.</p><table><tr><td>Apparent Magnitude</td><td>2.00</td></tr><tr><td>Spectral type</td><td>K1 IIIb</td></tr><tr><td>Mass</td><td>1.5 Mol</td></tr><tr><td>Luminosity</td><td>91</td></tr><tr><td>Distance from Earth</td><td>65.8ly / 20.2pc</td></tr><tr><td>Temperature</td><td>4480 K</td></tr></table>")
      .fadeIn(3000);
});

$(".sheratan").click(function (){
   $("#starinfo").html("<h4>Sheratan</h4><p>Sheratan is a binary star in the Aries constellation. It marks the Ram's second horn.</p><table><tr><td>Apparent Magnitude</td><td>2.655</td></tr><tr><td>Spectral type</td><td>A5 V</td></tr><tr><td>Mass</td><td>2.34 Mol</td></tr><tr><td>Luminosity</td><td>23</td></tr><tr><td>Distance from Earth</td><td>59.6ly / 18.3pc</td></tr><tr><td>Temperature</td><td>4810 K</td></tr></table>")
      .fadeIn(3000);
})

$(".mesarthim").click(function(){
   $("#starinfo").html("<h4>Mesarthim</h4><p>Hamal is a binary star system in the northern constellation of Aries. </p><table><tr><td>Apparent Magnitude</td><td>3.86</td></tr><tr><td>Spectral type</td><td>B9 V</td></tr><tr><td>Mass</td><td>Unkown Mol</td></tr><tr><td>Luminosity</td><td>Unknown</td></tr><tr><td>Distance from Earth</td><td>164ly / 50pc</td></tr><tr><td>Temperature</td><td>10970 K</td></tr></table>")
      .fadeIn(3000);
})

$(".41ari").click(function(){
   $("#starinfo").html("<h4>41 Arietes</h4><p>41 Arietes (sometimes abbreviated to 41 Ari), is a binary star in the northern constellation of Aries.</p><table><tr><td>Apparent Magnitude</td><td>3.63</td></tr><tr><td>Spectral type</td><td>B8 Vn</td></tr><tr><td>Mass</td><td>3.1 Solar Masses</td></tr><tr><td>Luminosity</td><td>160 Solar Luminosity</td></tr><tr><td>Distance from Earth</td><td>166ly / 50.8pc</td></tr><tr><td>Temperature</td><td>11900 K</td></tr></table>")
      .fadeIn(3000);
})

$()

$(document).click(function (event) {
   if (event.target.id !== "#starinfo") {
      $("#starinfo").fadeOut();
   }
})


/* 
$("#clickme").click(function () {
    $("#extra").fadeIn();
});
$(document).click(function (event) {
    if (event.target.id !== 'clickme') {
        $("#extra").fadeOut();
    }
})
*/







