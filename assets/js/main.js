document.addEventListener('DOMContentLoaded', () => {
  // 1. Zmiana tła nagłówka podczas przewijania (Scroll Header)
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Obsługa menu mobilnego (Hamburger)
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      siteNav.classList.toggle('active');
    });
  }

  // 3. Prosty paralaks dla tła w świetnej lokalizacji (tylko na ekranach stacjonarnych)
  const parallaxBg = document.querySelector('.location-bg');
  if (parallaxBg && window.innerWidth > 768) {
    window.addEventListener('scroll', () => {
      let scrollPosition = window.pageYOffset;
      parallaxBg.style.transform = 'translateY(' + (scrollPosition * 0.1) + 'px)';
    });
  }

  // 4. INICJACJA KARUZELI UDOGODNIEŃ (Swiper.js)
  if (document.querySelector('.swiper-amenities')) {
    new Swiper('.swiper-amenities', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

  // 5. INICJACJA KARUZELI APARTAMENTÓW (Swiper.js) - NOWOŚĆ!
  if (document.querySelector('.swiper-apartments')) {
    new Swiper('.swiper-apartments', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        nextEl: '.swiper-apartments .swiper-button-next',
        prevEl: '.swiper-apartments .swiper-button-prev',
      },
      pagination: {
        el: '.swiper-apartments .swiper-pagination',
        clickable: true,
      },
    });
  }
});document.addEventListener('DOMContentLoaded', () => {
  // 1. Zmiana tła nagłówka podczas przewijania (Scroll Header)
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Obsługa menu mobilnego (Hamburger)
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      siteNav.classList.toggle('active');
    });
  }

  // 3. Prosty paralaks dla tła w świetnej lokalizacji (tylko na ekranach stacjonarnych)
  const parallaxBg = document.querySelector('.location-bg');
  if (parallaxBg && window.innerWidth > 768) {
    window.addEventListener('scroll', () => {
      let scrollPosition = window.pageYOffset;
      parallaxBg.style.transform = 'translateY(' + (scrollPosition * 0.1) + 'px)';
    });
  }

  // 4. INICJACJA KARUZELI UDOGODNIEŃ (Swiper.js)
  if (document.querySelector('.swiper-amenities')) {
    new Swiper('.swiper-amenities', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
// ==========================================================================
  // EXTRA: RĘCZNE PODPIĘCIE STRZAŁEK APARTAMENTÓW
  // ==========================================================================
  
  // Szukamy lewej strzałki apartamentów
  const btnPrev = document.querySelector('.carousel-control-prev, .slider-arrow-left, .swiper-button-prev:not(.swiper-amenities *)');
  // Szukamy prawej strzałki apartamentów
  const btnNext = document.querySelector('.carousel-control-next, .slider-arrow-right, .swiper-button-next:not(.swiper-amenities *)');

  // Funkcja symulująca przejście do poprzedniego slajdu
  if (btnPrev) {
    btnPrev.addEventListener('click', (e) => {
      // Jeśli to Bootstrap Carousel:
      const carouselEl = document.querySelector('.carousel');
      if (carouselEl && typeof bootstrap !== 'undefined') {
        const c = bootstrap.Carousel.getInstance(carouselEl) || new bootstrap.Carousel(carouselEl);
        c.prev();
      }
      // Jeśli to Swiper (główny slider):
      const mainSwiperEl = document.querySelector('.hero-slider');
      if (mainSwiperEl && mainSwiperEl.swiper) {
        mainSwiperEl.swiper.slidePrev();
      }
    });
  }

  // Funkcja symulująca przejście do następnego slajdu
  if (btnNext) {
    btnNext.addEventListener('click', (e) => {
      // Jeśli to Bootstrap Carousel:
      const carouselEl = document.querySelector('.carousel');
      if (carouselEl && typeof bootstrap !== 'undefined') {
        const c = bootstrap.Carousel.getInstance(carouselEl) || new bootstrap.Carousel(carouselEl);
        c.next();
      }
      // Jeśli to Swiper (główny slider):
      const mainSwiperEl = document.querySelector('.hero-slider');
      if (mainSwiperEl && mainSwiperEl.swiper) {
        mainSwiperEl.swiper.slideNext();
      }
    });
  }
});
