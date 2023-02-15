const sideBar = document.querySelector(".sidebar")
const openBtn = document.querySelector(".nav-btn")
const closeBtn = document.querySelector(".close-btn")

openBtn.addEventListener('click', () => {
    // console.log(sideBar.classList);
    // if (sideBar.classList.contains("show-sidebar")) {
    //     sideBar.classList.remove("show-sidebar")
    // } else {
    //     sideBar.classList.add("show-sidebar")
    // }
    sideBar.classList.toggle("show-sidebar")
})

closeBtn.addEventListener('click', () => {
    sideBar.classList.remove("show-sidebar")
})
