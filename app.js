const footer = document.querySelector('footer');
const header = document.querySelector('header');

// function obCallBack(payload) {
//   if (!payload[0].isIntersecting) {
//     header.style.display = "block";
//   }
//   else {
//     header.style.display = "none";
//     header.style.height = "55px";
//   }
// }

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
    header.classList.add('is-visible');
    header.style.height = height;
  } else {
    header.classList.remove('is-visible');
    header.style.height = "0"
  }
}



const ob = new IntersectionObserver(obCallBack);

ob.observe(footer);