const burgerMenu = document.querySelector(".burger-menu")
const navMenu = document.querySelector(".header-nav")
const burgerItems = document.querySelectorAll(".burger-item")
// modal
const modal = document.querySelector("#modal")
const btn = document.querySelector(".open-btn")
const close = document.querySelector(".close-btn")
const blur = document.querySelector(".blur-widow")


// burgerMenu
burgerMenu.addEventListener("click", () => {
   if (!burgerMenu.classList.contains("active")) {
       burgerMenu.classList.add("active")
       navMenu.style.transform = "translateX(0)"
       burgerItems[0].style.transform = "rotate(45deg) translateY(11px)"
       burgerItems[2].style.transform = "rotate(-45deg) translateY(-11px)"
       burgerItems[1].style.transform = "translateX(19px)"
       burgerItems[1].style.opacity = "0"

   } else {
       burgerMenu.classList.remove("active")
       navMenu.style.transform = "translateX(100%)"
       burgerItems[0].style.transform = "rotate(0deg)"
       burgerItems[2].style.transform = "rotate(0deg)"
       burgerItems[1].style.transform = "translateX(0px)"
       burgerItems[1].style.opacity = "1"

   }
})


// modal
btn.addEventListener("click", () => {
    modal.style.transform = "scale(1)"
    blur.style.display = "block"

})
close.addEventListener("click", () => {
    modal.style.transform = "scale(0)"
    blur.style.display = "none"
})
blur.addEventListener("click", () => {
    modal.style.transform = "scale(0)"
    blur.style.display = "none"
})