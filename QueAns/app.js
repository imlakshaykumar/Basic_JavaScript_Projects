const openBtn = document.querySelectorAll(".btn");
const queAll = document.querySelectorAll(".que-container")
const closeBtn = document.querySelectorAll(".close-btn")

openBtn.forEach(function (btn) {
    btn.addEventListener('click', function (e) {

        const queContainer = e.currentTarget.parentElement.parentElement;

        openBtn.forEach(function (button) {
            button.classList.remove("show-close")
        });

        queAll.forEach(function (element) {
            element.classList.remove("show-ans")

            // closeBtn.forEach(function (close) {
            //     close.addEventListener("click", () => {
            //         console.log("hello");
            //     })
            // })
        });
        queContainer.classList.toggle("show-ans")
        btn.classList.toggle("show-close")
    })
})

// closeBtn.forEach(function (close) {
//     close.addEventListener("click", (e) => {
//         const queContainer = e.currentTarget.parentElement.parentElement.parentElement;
//         // if (queContainer.classList.contains("show-ans")) {
//         //     queContainer.classList.remove("show-ans");
//         // }
//         // const btnContainer = queContainer.querySelector(".btn");
//         // // if (btnContainer.classList.contains("show-close")) {
//         // //     btnContainer.classList.remove("show-close");
//         // // }

//         console.log(queContainer.classList.contains("show-ans"));
//         console.log("Remove");
//         // queContainer.classList.remove("show-ans")
//         // btnContainer.classList.remove("show-close")
//     });
// });
