const imageArr = [
    './Test Images/face-1.jpeg',
    './Test Images/face-2.jpeg',
    './Test Images/face-3.jpeg',
    './Test Images/face-4.jpeg'
]

const nameArr = ['Susan Smith', 'Anna Johanson', 'Peter Jones', 'Bill Anderson'];

const positionArr = ['Web Developer', 'Web Designer', 'Intern', 'The Boss'];

const descriptionArr = [
    "Im baby meggings twee health goth + 1. Bicycle rights tumeric chartreuse before they sold out chambray pop - up.Shaman humblebrag pickled coloring book salvia hoodie, cold - pressed four dollar toast everyday carry",

    "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",

    "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",

    "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
];

// const objects = {
//     'name': 'Susan Smith',
//     'position': 'Web Developer',
//     'description': 'Im baby meggings twee health goth + 1. Bicycle rights tumeric chartreuse before they sold out chambray pop - up.Shaman humblebrag pickled coloring book salvia hoodie, cold - pressed four dollar toast everyday carry'

// }

// store/check the previous random number
let previousNum;

const imageEL = document.querySelector("#image-el");
const nameEL = document.querySelector("#name-el");
const positionEL = document.querySelector("#position-el");
const descriptionEL = document.querySelector("#description-el");
const leftBtn = document.querySelector("#left-iconBtn")
const rightBtn = document.querySelector("#right-iconBtn")

const surpriseBtn = document.querySelector("#surprise-Btn");

let arrIndex;
let image;
let fullName;
let position;
let description;
function change() {
    imageEL.src = imageArr[arrIndex];
    nameEL.textContent = nameArr[arrIndex];
    positionEL.textContent = positionArr[arrIndex];
    descriptionEL.textContent = descriptionArr[arrIndex];
}

leftBtn.addEventListener('click', () => {

})

rightBtn.addEventListener('click', () => {

})

surpriseBtn.addEventListener('click', () => {
    // console.log("Hello")

    let randomNum = randomNumber();
    console.log(randomNum);

    image = imageArr[randomNum];
    fullName = nameArr[randomNum];
    position = positionArr[randomNum];
    description = descriptionArr[randomNum];

    imageEL.src = image;
    nameEL.textContent = fullName;
    positionEL.textContent = position;
    descriptionEL.textContent = description;

    previousNum = randomNum;
});

function randomNumber() {
    let random = Math.floor(Math.random() * nameArr.length)
    if (random === previousNum) {
        return randomNumber();
    } else {
        return random
    }
    // return Math.floor(Math.random() * nameArr.length);
}
