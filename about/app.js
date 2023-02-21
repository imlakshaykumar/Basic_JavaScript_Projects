const btn = document.querySelectorAll(".tab-btn")
const content = document.querySelectorAll(".content")

btn.forEach(element => {
    element.addEventListener("click", () => {
        // if (element.classList.contains("active")) {
        //     element.style.display = "block"
        // }
        showData(element.getAttribute("data-id"))
    })
});

function showData(id) {
    btn.forEach(element => {
        if (element.getAttribute("data-id") === id) {
            // element.style.display = "grid";
            element.classList.add("active");
        } else {
            // element.style.display = "none";
            element.classList.remove("active")
        }
    })
    content.forEach(element => {
        if (element.getAttribute("data-id") === id) {
            // element.style.display = "grid";
            element.classList.add("active");
        } else {
            // element.style.display = "none";
            element.classList.remove("active")
        }
    })
}
