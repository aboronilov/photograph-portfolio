// change nav bar when it is scrolled

window.addEventListener("scroll", ()=>{
    const nav = document.querySelector("nav");
    nav.classList.toggle("window-scrolled", window.scrollY > 0)
})

// contact buttons circular text

const textButtons = document.querySelectorAll('.contact__btn');

textButtons.forEach(textButton => {
    let text = textButton.querySelector('p');
    let insert = text.innerHTML.split('').map((letter, index) => `<span style="transform: rotate(${index * 12}deg)">${letter}</span>`).join();
    const final = insert.replace(/,/g, '')
    text.innerHTML = final

})

// swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,

    autoplay: {
        delay: 3000,
        disableOnIteraction: false,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    breakpoints: {
        599: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1023: {
            slidesPerView: 3,
            spaceBetween: 60,
        }
    }  

  });

// responsive navbar

const navLinks = document.querySelector('.nav__links');
const openNavBtn = document.querySelector('#nav__toggle-open');
const closeNavBtn = document.querySelector('#nav__toggle-close');

const openNav = () => {
    navLinks.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}

openNavBtn.addEventListener("click", openNav);

const closeNav = () => {
    navLinks.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}

closeNavBtn.addEventListener("click", closeNav);
 
navLinks.querySelectorAll('li a').forEach(item => {
    item.addEventListener('click', closeNav)
})