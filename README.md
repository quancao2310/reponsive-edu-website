# Responsive Multipage Education Website

This is a frontend project inspired by [EGATOR](https://www.youtube.com/@EGATORTUTORIALS). The original project is [here](https://youtu.be/--XrIa-iey0). There are many other cool projects on this channel.

## Table of contents

- [Overview](#overview)
    - [The project](#the-project)
    - [Screenshot](#screenshot)
    - [Links](#links)
- [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Useful resources](#useful-resources)
- [Acknowledgments](#acknowledgments)

## Overview

### The project

This is an online educational website with a home page, an information page, a courses page and a contact page. Users can navigate through the pages and inspect the style for each page. The pages are also designed responsively so that each page can be viewed effectively on desktop, tablet or mobile devices. This project covers many aspects of CSS styling such as CSS variables, CSS grid, flexbox, media queries, transitions and animations...

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markups (header, footer, section, article...)
- CSS custom properties
- Flexbox
- CSS Grid
- Transition and animation
- Responsive Design
- [JQuery](https://jquery.com/) - JS library
- [Swiper.js](https://swiperjs.com/) - JS tool for swiping component
- [Formspree](https://formspree.io/) - API for handling form submission

### What I learned

- Using grid to layout websites
```html
<div class="container header-container">
    <div class="header-left"></div>
    <div class="header-right"></div>
</div>
```
```css
.header-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 5rem;
}
```

Using Swiper.js to create a swiper component in home page
```js
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
});

```

### Useful resources
Apart from the project link, these are some useful resourses to help complete the project:

- [W3School](https://www.w3schools.com/)

## Acknowledgments

Special thanks to [EGATOR](https://www.youtube.com/@EGATORTUTORIALS) for creating a wonderful project.
