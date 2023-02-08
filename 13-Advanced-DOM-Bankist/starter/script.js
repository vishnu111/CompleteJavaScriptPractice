'use strict';

// // Selecting, Creating, and Deleting Elements
// // Selecting elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

// // Creating and inserting elements
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent = 'We use cookied for improved functionality and analytics.';
// message.innerHTML =
//   'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// // header.prepend(message);
// header.append(message);
// // header.append(message.cloneNode(true)); //When we are using two or more methods like append or prepend on DOM object like (message), we should use cloneNode(true) from the second function call, otherwise only the last function call executes and stays.

// // header.before(message);
// // header.after(message);

// // Delete elements
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     // message.remove(); //This is new way of removining
//     message.parentElement.removeChild(message); //This is old way of removing
//   });

// // Styles, Attributes and Classes
// // Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// //We can only access the css properties like below if are in-line css
// console.log(message.style.color);
// console.log(message.style.backgroundColor); //should use camel case for css properties

// //To access css properties of any element
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// //Here, we are accessing a css property(height) for the DOM object message and replacing that by adding 30px to it
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// //Here we are changing the property of pre-defined css properties from root
// document.documentElement.style.setProperty('--color-primary', 'orangered');

// // Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.className);
// //setting the attribute alt
// logo.alt = 'Beautiful minimalist logo';

// // Non-standard - We can't read custom attributes like below
// console.log(logo.designer);
// //Method to read custom attributes
// console.log(logo.getAttribute('designer'));
// //To set custom attributes
// logo.setAttribute('company', 'Bankist');
// //returns absoulte url
// console.log(logo.src);
// //returns relative url
// console.log(logo.getAttribute('src'));

// // Data attributes
// //To access data attributes(starts with "data-OUROWNNAME"), the below dataset object contains the list of data attributes
// console.log(logo.dataset.versionNumber);

// // Classes
// logo.classList.add('c', 'j');
// logo.classList.remove('c', 'j');
// logo.classList.toggle('c');
// logo.classList.contains('c'); // not includes

// // Don't use
// //Not reccommended to use this to add class names before it replaces the exsisting class names with this
// logo.clasName = 'jonas';

// Types of Events and Event Handlers
// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('addEventListener: Great! You are reading the heading :D');
// };

// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! You are reading the heading :D');
// };

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//To Implement scroll on button click
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  // const s1coords = section1.getBoundingClientRect(); //This gets the coordinates of the object like x, y, top, width, height
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect()); //Here, the e.target is btnScrollTo
  // console.log('Current Scroll (X/Y)', window.pageXOffset, window.pageYOffset); //This shows how much distance we have scrolled in x and y axis

  //This gives the viewport width and height of the device
  // console.log(
  //   'viewport height/width',
  //   document.documentElement.clientWidth,
  //   document.documentElement.clientHeight
  // );

  //To scroll to the particular section : OLD WAY
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.right + window.pageXOffset
  // );

  //To scroll to the particular section SMOOTHLY : OLD WAY
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.right + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  //To scroll to the particular section SMOOTHLY : NEW WAY
  section1.scrollIntoView({ behavior: 'smooth' });
});

/************/
// // Event Propagation in Practice
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);

//   // Stop propagation
//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('NAV', e.target, e.currentTarget);
//   },
//   true
// );
/***********/

//Page Navigation: This is the old way of scrolling to certain section, here for each section an event listener is added making it ineffective : EVENT DELEGATION is the solution for it
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//Page Navigation: new way (EVENT DELEGATION)
//1) Add Event Listener to the parent element
//2) Determine which element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// ///////////////////////////////////////
// // DOM Traversing
// const h1 = document.querySelector('h1');

// // Going downwards: child
// //selects all the children elements that has "highlight as class"
// console.log(h1.querySelectorAll('.highlight'));
// //Selects all the child elements in NodeList form
// console.log(h1.childNodes);
// //selects all the child elements in HTMLCollection
// console.log(h1.children);
// //selects the first child of h1
// h1.firstElementChild.style.color = 'white';
// //selects the last child of h1
// h1.lastElementChild.style.color = 'orangered';

// // Going upwards: parents
// //Selecting the immediate parent Node/Element
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// //This selects the closest parent element of h1 that has "header" class
// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// //Since 'h1' itself is closest to it, it selects the same
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// // Going sideways: siblings
// //Selects the previous and next siblings in HTMLCollection
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// //Selects the previous and next siblings in NodeList
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// //Here we are selecting the parent of h1 and then from that parent we are selecting it's children which includes the "h1"
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });

//implementing tabs
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content ');
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  //Gaurd clause
  if (!clicked) return;

  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(tb => tb.classList.remove('operations__content--active'));

  //Activate tab
  clicked.classList.add('operations__tab--active');

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//Menu Fade Animation
const nav = document.querySelector('.nav');

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(l => {
      if (l != link) l.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

//Hover-in event
// nav.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// });
//(or)
nav.addEventListener('mouseover', handleHover.bind(0.5));

//Hover-out event
// nav.addEventListener('mouseout', function (e) {
//   handleHover(e, 1);
// });
//(or)
nav.addEventListener('mouseout', handleHover.bind(1));
//This bind method creates a this keyword with whatever the value we pass to that bind function

//Sticky navigation : NOT EFFICIENT WAY
// window.addEventListener('scroll', function () {
//   if (this.window.scrollY > section1.getBoundingClientRect().top)
//     nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

//Sticky Navigation example(not actual implementation): Intersection Observer API : this is superior and efficient to the above one to implement sticky navigation because this only invokes when the section one comes into view unlike the above where is invokes whenever the scroll event happens
// const obsCallback = function (entries, observer) {};
// const obsOptions = {
//   root: null,
//   threshold: 1,
// };
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// //This obsCallBAck function call happens when the section1 intersects(it basically means when the section1 comes into view at 10% of it's size) the viewport at 10% threshold (DEFINED IN obsOptions)
// observer.observe(section1);

//Sticky Navigation : actual site implementation with Intersection Observer API
const header = document.querySelector('.header');
//To get the height of the nav bar
const navHeight = document.querySelector('.nav').getBoundingClientRect().height;
const stObCB = function (entries) {
  //This is the threshold array
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

//Sections fadeIn as they come into view
const stickyObserver = new IntersectionObserver(stObCB, {
  root: null,
  //This allows us to invoke stObCB whenever it is out of viewport view
  threshold: 0,
  //This allows us to invoke stObCM whenever the header is 90px short of coming into view
  rootMargin: `-${navHeight}px`,
});
stickyObserver.observe(header);

const allSections = document.querySelectorAll('.section');

const secFadeCall = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const secFadeIn = new IntersectionObserver(secFadeCall, {
  root: null,
  threshold: 0.11,
});

allSections.forEach(sec => {
  secFadeIn.observe(sec);
  //sec.classList.add('section--hidden');
});

//Lazy loading images in the site: First a low resoultion image is loading when site is opened. when we keep on scrolling the low resolution images will get replaced with high-res images with the below operations
//We are selecting all the HTML image tag elements with data-src attribute
const lazyImg = document.querySelectorAll('img[data-src]');

const lazyImgCall = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  //The lazy-img class gives the low-res image a blur effect: when the high-res image is loaded we will remove that blur, we are not removing the laz-img class like below because sometimes when slow internet connection the high-res image loading might take time. we only want to show the high-res image only it is fully loaded: so, we are using the eventlister for load on img section
  //entry.target.classList.remove('lazy-img');
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};
const lazyImgObserver = new IntersectionObserver(lazyImgCall, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});
lazyImg.forEach(img => lazyImgObserver.observe(img));

//Slider implentation
const sliderFn = function () {
  //Slider(testimonials)
  const slider = document.querySelector('.slider');
  const allSliders = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.slider__btn--left');
  const nextBtn = document.querySelector('.slider__btn--right');
  const dotsContainer = document.querySelector('.dots');
  let curSlide = 0;
  const sliderLen = allSliders.length;
  const slideOp = function (slide) {
    allSliders.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };
  //adding slide dots HTML by dynamically counting the slides
  const addDots = function () {
    allSliders.forEach(function (_, i) {
      dotsContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activeSlide = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(s => s.classList.remove('dots__dot--active'));
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const init = function () {
    slideOp(0);
    addDots();
    activeSlide(0);
  };
  init();
  const prevSlide = function () {
    if (curSlide != 0) curSlide--;
    else curSlide = sliderLen - 1;
    slideOp(curSlide);
    activeSlide(curSlide);
  };
  const nxtSlide = function () {
    if (curSlide != allSliders.length - 1) curSlide++;
    else curSlide = 0;
    slideOp(curSlide);
    activeSlide(curSlide);
  };
  nextBtn.addEventListener('click', nxtSlide);
  prevBtn.addEventListener('click', prevSlide);

  //Slide change on arrow keys press
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') nxtSlide();
    e.key === 'ArrowLeft' && prevSlide();
  });

  //Adding Event listerner to the parent dots element
  dotsContainer.addEventListener('click', function (e) {
    const elem = e.target.classList;
    console.log(elem);
    if (elem.contains('dots__dot')) {
      slideOp(e.target.dataset.slide);
      activeSlide(e.target.dataset.slide);
    }
  });
};
sliderFn();
