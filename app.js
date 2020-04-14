const footer = document.querySelector('footer');
const header = document.querySelector('header');
const circleButton = document.querySelector('.circle-button');
const homeContent = document.querySelector('.tippy-top');
const aboutContent = document.querySelector('.about-content');
const portfolioContent = document.querySelector('.portfolio-content');
const contactContent = document.querySelector('.contact-content');
const home = document.querySelector('.home');
const about = document.querySelector('.about');
const portfolio = document.querySelector('.portfolio');
const contact = document.querySelector('.contact');
const footerBar = document.querySelector('.footer-bar');

home.addEventListener('click', () => {
  homeContent.scrollIntoView();
})

about.addEventListener('click', () => {
  aboutContent.scrollIntoView();
})

portfolio.addEventListener('click', () => {
  portfolioContent.scrollIntoView();
})

contact.addEventListener('click', () => {
  contactContent.scrollIntoView();
})

function obCallBack(payload) {
  if (!payload[0].isIntersecting) {
    footer.style.position = "fixed";
    footer.style.top = "0";
  } else {
    footer.style.position = "unset";
  }
}

const ob = new IntersectionObserver(obCallBack);

ob.observe(footerBar);

let prevScrollPos = window.pageYOffset;
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    footer.style.top = "0"
  } else {
    footer.style.top = "-63px"
  }
  prevScrollPos = currentScrollPos;
}