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

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpionts: {
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