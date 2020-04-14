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
const aboutBar = document.querySelector('.about-bar');

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
    aboutBar.style.display = "block";
  }
}

const ob = new IntersectionObserver(obCallBack);

ob.observe(footerBar);

function obAboutCallBack(payload) {
  const aboutBarHeight = payload[0].rootBounds.height;
  if (payload[0].isIntersecting) {  
    return;
  } else {
    aboutBar.style.display = "none";
    let prevScrollPos = window.pageYOffset;
    window.onscroll = () => {
      let currentScrollPos = window.pageYOffset;
      if (currentScrollPos < aboutBarHeight) {
        return;
      } else
      if (prevScrollPos > currentScrollPos) {
        footer.style.top = "0"
      } else {
        footer.style.top = "-63px"
      }
      prevScrollPos = currentScrollPos;
    }
  }
}

const obAbout = new IntersectionObserver(obAboutCallBack);

obAbout.observe(aboutBar);