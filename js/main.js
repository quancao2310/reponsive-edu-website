$(document).ready(() => {
  // change navbar color when scrolling
  $(window).on('scroll', () => {
    $('nav').toggleClass('nav-window-scroll', window.scrollY > 10)
  })

  // Show/hide faqs
  $('.faq-item').on('click', event => {
    let tar = $(event.currentTarget)
    tar.find('.faq-ques-ans p').toggle(200)
    tar.find('.faq-icon-close, .faq-icon-open').toggle()
  })

  // Swiper effect
  let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      600: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  })

  // Tablet/Mobile Navbar effect
  const menu = $('.nav-menu');
  const openBtn = $("#open-menu-btn");
  const closeBtn = $("#close-menu-btn");
  openBtn.on('click', () => {
    menu.css('display', 'flex')
    closeBtn.css('display', 'inline-block')
    openBtn.hide()
  })

  closeBtn.on('click', () => {
    menu.hide()
    closeBtn.hide()
    openBtn.css('display', 'inline-block')
  })
})