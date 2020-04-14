const nav = document.querySelector('nav');
const circleButton = document.querySelector('.circle-button');
const homeContent = document.querySelector('.tippy-top');
const aboutContent = document.querySelector('.about-content');
// note below: portfolioContent might need to change
const portfolioContent = document.querySelector('.portfolio-heading');
const contactContent = document.querySelector('.contact-content');
const home = document.querySelector('.home');
const about = document.querySelector('.about');
const portfolio = document.querySelector('.portfolio');
const contact = document.querySelector('.contact');
const bottomBar = document.querySelector('.bottom-bar');
const aboutBar = document.querySelector('.about-bar');
const xsNav = document.querySelector('.xs-nav');
const xsUl = document.querySelector('.xs-ul');
const add = document.querySelector('.add');

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
    nav.style.position = "fixed";
    nav.style.top = "0";
  } else {
    nav.style.position = "unset";
  }
}

const ob = new IntersectionObserver(obCallBack);

ob.observe(bottomBar);

function obAboutCallBack(payload) {
  const aboutBarHeight = payload[0].rootBounds.height;
  if (payload[0].isIntersecting) {  
    return;
  } else {
    let prevScrollPos = window.pageYOffset;
    window.onscroll = () => {
      let currentScrollPos = window.pageYOffset;
      if (currentScrollPos < aboutBarHeight) {
        return;
      } else
      if (prevScrollPos > currentScrollPos) {
        nav.style.top = "0"
      } else {
        nav.style.top = "-59px"
      }
      prevScrollPos = currentScrollPos;
    }
  }
}

const obAbout = new IntersectionObserver(obAboutCallBack);

obAbout.observe(aboutBar);

circleButton.addEventListener('click', circleButtonClick);

function circleButtonClick() {
  xsNav.classList.toggle('xs-nav-visible');
  xsUl.classList.toggle('xs-ul-visible');
  add.classList.toggle('add-nav-open');

}