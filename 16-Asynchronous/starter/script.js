'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
//one way of AJAX call to an API
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     //Converts a JavaScript Object Notation (JSON) string into an object.
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     const html = `
//   <article class="country">
//   <img class="country__img" src="${data.flags.svg}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name.official}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1000000
//     ).toFixed(1)}M People</p>
//     <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
//     <p class="country__row"><span>💰</span>${data.currencies.name}</p>
//   </div>
// </article>
//   `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };
// // getCountryData('india');
// getCountryData('india');
// getCountryData('usa');
// getCountryData('pakistan');
// const getCountryAndNeighbour = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     //Converts a JavaScript Object Notation (JSON) string into an object.
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     renderCountry(data);
//     const [neighbour] = data.borders;
//     console.log(neighbour);
//     if (!neighbour) return;

//     //AJAX call for neighbour
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();
//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2[0], 'neighbour');
//     });
//   });
// };
// getCountryAndNeighbour('usa');

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

//AJAX call using promise and fetch: ES6
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

//simplyfied version of above AJAX call using arrow functions
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => response.json())
//     .then(data => renderCountry(data[0]));
// };
// getCountryData('portugal');

// const renderCountry = function (data, className = '') {
//   const html = `
//     <article class="country ${className}">
//     <img class="country__img" src="${data.flags.svg}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name.official}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +data.population / 1000000
//       ).toFixed(1)}M People</p>
//       <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
//       <p class="country__row"><span>💰</span>${data.currencies}</p>
//     </div>
//   </article>
//     `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };
// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   countriesContainer.style.opacity = 1;
// };

// const getJSON = function (url, errMsg = 'Something went wrong') {
//   fetch(url).then(response => {
//     console.log(response);
//     if (!response.ok) throw new Error(`${errMsg} (${response.status})`);

//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, 'country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       if (!neighbour) return;

//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         'country not found'
//       );
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       renderError(`Something went wrong ${err}`);
//     })
//     .finally(() => {
//       console.log(
//         "This Finnaly works irrespective of status from fetch's promise "
//       );
//     }); //This finnaly block executes even when promise from fetch is failed or success
// };

// //fetching the neighbour country data using the resulted data(neighbour country name) from first API call using chaining promises
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);
//       if (!response.ok) {
//         //We are creating a new custom error here: once this error is thrown this directly propagates to the catch block with this message as argument
//         throw new Error(`Country not found (${response.status})`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       if (!neighbour) return;

//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(res => res.json())
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       renderError(`Something went wrong ${err}`);
//     }) //Here the catch block catches the error that occured during the fetch. We are just passing the error message to display in the page using renderError function
//     .finally(() => {
//       console.log(
//         "This Finnaly works irrespective of status from fetch's promise "
//       );
//     }); //This finnaly block executes even when promise from fetch is failed or success
// };

// btn.addEventListener('click', function () {
//   getCountryData('hko');
// });

//auth = 1047035591528639593x105424
// const whereAmI = function (lat, lng) {
//   fetch(
//     `https://geocode.xyz/${lat},${lng}?geoit=json&auth=1047035591528639593x105424`
//   )
//     .then(response => {
//       if (!response.ok) throw new Error(`Excedded API class error`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(
//         `you are in city: ${data.city} in ${data.region}, ${data.country}`
//       );
//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(response => response.json())
//     .then(dat => {
//       console.log(dat[0]);
//       renderCountry(dat[0]);
//     })
//     .catch(err => console.log(err))
//     .finally(() => console.log(`checking the finnaly block`));
// };
// whereAmI(13.321394, 79.186234);
// // whereAmI(52.508, 13.381);
// // whereAmI(-33.933, 18.474);
