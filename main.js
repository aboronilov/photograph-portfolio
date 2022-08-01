// change nav bar when it is scrolled

window.addEventListener("scroll", ()=>{
    const nav = document.querySelector("nav");
    nav.classList.toggle("window-scrolled", window.scrollY > 0)
})