const navToggle = document.querySelector("#nav-toggle");
// const links = document.querySelector(".list");
const links = document.querySelector(".index-list");

navToggle.addEventListener('click', () => {
    // console.log(links.classList);
    // console.log(links.classList.contains("list"));

    if (links.classList.contains("show-links")) {
        links.classList.remove("show-links")
    } else {
        links.classList.add("show-links")
    }

})
