const openBtn = document.querySelectorAll(".btn");
const queAll = document.querySelectorAll(".que-container")
const closeBtn = document.querySelectorAll(".close-btn")

openBtn.forEach(function (btn) {
    btn.addEventListener('click', function (e) {

        const queContainer = e.currentTarget.parentElement.parentElement;

        queAll.forEach(function (element) {
            if (queContainer !== element) {
                element.classList.remove("show-ans")
            }
        });

        if (queContainer.classList.contains("show-ans")) {
            // console.log("add");
            queContainer.classList.remove("show-ans")
        } else {
            // console.log("remove");
            queContainer.classList.add("show-ans")
        }
    })
})
