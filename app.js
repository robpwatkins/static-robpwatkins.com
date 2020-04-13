const footer = document.querySelector('footer');
const header = document.querySelector('header');
const circleButton = document.querySelector('.circle-button');

function obCallBack(payload) {
  console.log(payload[0].intersectionRatio);
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