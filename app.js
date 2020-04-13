const footer = document.querySelector('footer');
const header = document.querySelector('header');
const circleButton = document.querySelector('.circle-button');
const homeContent = document.querySelector('.tippy-top');
const aboutContent = document.querySelector('.about-content');
const portfolioContent = document.querySelector('.portfolio-content');
const contactContent = document.querySelector('.contact-content');
const about = document.querySelector('.about');
const portfolio = document.querySelector('.portfolio');
const contact = document.querySelector('.contact');
const headerHome = document.querySelector('header .home');
const headerAbout = document.querySelector('header .about');
const headerPortfolio = document.querySelector('header .portfolio');
const headerContact = document.querySelector('header .contact');


about.addEventListener('click', () => {
  aboutContent.scrollIntoView();
})

portfolio.addEventListener('click', () => {
  portfolioContent.scrollIntoView();
})

contact.addEventListener('click', () => {
  contactContent.scrollIntoView();
})

headerHome.addEventListener('click', () => {
  homeContent.scrollIntoView();
})

headerAbout.addEventListener('click', () => {
  aboutContent.scrollIntoView();
})

headerPortfolio.addEventListener('click', () => {
  portfolioContent.scrollIntoView();
})

headerContact.addEventListener('click', () => {
  contactContent.scrollIntoView();
})

function obCallBack(payload) {
  if (!payload[0].isIntersecting) {
    function getHeight() {
      header.style.display = 'block';
      const height = header.scrollHeight + 'px';
      header.style.display = '';
      return height;
    }
    const height = getHeight();
    header.style.display = "block";
    header.style.height = height;
  } else {
    header.style.display = "none";
    header.style.height = "0"
  }
}

const ob = new IntersectionObserver(obCallBack);

ob.observe(footer);

let prevScrollPos = window.pageYOffset;
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    header.style.top = "0"
  } else {
    header.style.top = "-50px"
  }
  prevScrollPos = currentScrollPos;
}