'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

//Implementing navigator API to fetch current coordinates
//this has two callback functions, if you allow the location in browser when requested it calls the first function, if you decline it calls the second function
navigator.geolocation.getCurrentPosition(
  function (position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    //coords in array format
    const coords = [latitude, longitude];
    //Here, the 'map' we are passing inside map function should be an id name at the div where we intend to display the map
    //From leaflet library

    //Here, '13' is the zoom level
    const map = L.map('map').setView(coords, 13);

    //the map that loads up in the page is group of tiles, those tiles comes from the below url(from openstreetmap which is a open source map everyone can use for free), like openstreetmap here, the leaflet can work with other kinds of map like google maps
    //The default style of openstreet map is "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //the other style of openstreetmap is "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    //adding eventlistener to map to add markers at clicked positons using leaflet object 'map'
    //Here on is a leaflet's function
    map.on('click', function (mapEvent) {
      const { lat, lng } = mapEvent.latlng;
      //This marker method and inner methods of leaflet's library documentation can be found here "https://leafletjs.com/reference.html#marker"
      L.marker([lat, lng])
        .addTo(map)
        .bindPopup(
          L.popup({
            //options passed to popup method
            maxWidth: 250,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            className: 'running-popup',
          })
        )
        .setPopupContent('workout')
        .openPopup();
    });
  },
  function () {
    alert('Could not get your coords since you declined');
  }
);
