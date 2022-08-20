

function all(n) {
  return document.querySelectorAll(n);
}
function one(n) {
  return document.querySelector(n);
}

// for the dark mode 
function rotate() {
  all('.hamburger div').forEach((e, i) => {
    e.classList.toggle('rotate' + (i) + '')
  });
}

one(".hamburger").onclick = () => {
  one('header ul.navlist').classList.toggle('hidden');
  one('header ul.navlist').classList.toggle('sm:hidden');
  rotate();

}


/* initialize autotyper */
var typer = new autoTyper({
  selector: '.typer-target',
  words: ['Hello to my portfolio', 'I am Hassan Mostafa ', 'I am a software developper', 'This is my portfolio'],
  charSpeed: 150,
  delay: 1000,
  loop: true,
  flipflop: false
})
window.onload = function () {
  typer.start();
  one(".loadingpage").classList.add('hidden');

}


// options button
one('.options').addEventListener('click', function (e) {
  one('.options .features').classList.toggle('hidden');
  rotate();
})

// on click on the features button we open the features
one('ul li.features').addEventListener('click', e => {
  one('.blocks').classList.remove('invisible');
  one('body').classList.add('fixed')

})
one('.closefeatures').onclick = e => {
  one('.blocks').classList.add('invisible');
  one('body').classList.remove('fixed')
}
all('.navlist li').forEach(e => {
  e.addEventListener('click', el => {
    one('.navlist').classList.add('hidden');
    one('.navlist').classList.add('sm:hidden');
    rotate();
  })
})

// toggle between the modes
all('.mode').forEach(e => {
  e.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
      localStorage.setItem('mode', 'dark')
    }
    else localStorage.setItem('mode', 'light')

  })
});
// save mode to local storage
let mode = localStorage.getItem('mode');
if (mode != null) {
  document.body.classList.add(mode);
}

// onscroll event 
window.addEventListener('scroll', () => {
  all('.progresses').forEach(e => {
    let scrolling = e.offsetTop + e.parentElement.offsetTop;
    let scrolled = window.scrollY + window.innerHeight - e.offsetHeight / 2;
    if (scrolled > scrolling) {
      e.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.setAttribute('stroke-dasharray',
      e.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.getAttribute('stroke-dasharray'))
    }
    else if (scrolled < scrolling) {
      e.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.setAttribute('stroke-dasharray',282.74);
    }
  })

})



//  


// On page load or when changing themes, best to add inline in `head` to avoid FOUC


// Whenever the user explicitly chooses light mode



// Whenever the user explicitly chooses dark mode


// Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem('theme')

// the onscroll player
AOS.init();

// for slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  // loop:true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    300: {
      slidesPerView: 1.25,
      spaceBetween: 10
    },
    330: {
      slidesPerView: 1.4,
      spaceBetween: 10
    },
    368: {
      slidesPerView: 1.55,
      spaceBetween: 10
    },
    400: {
      slidesPerView: 1.7,
      spaceBetween: 10
    },

    460: {
      slidesPerView: 1.85,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 1.95,
      spaceBetween: 20,
    },
    510: {
      slidesPerView: 2.1,
      spaceBetween: 20,
    },
    560: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },

    610: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 3.65,
      spaceBetween: 35
    },
    1180: {
      slidesPerView: 4.65,
      spaceBetween: 30
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


