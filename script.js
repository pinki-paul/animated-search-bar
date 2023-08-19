const magnifying = document.querySelector(".magnifying");
const mic = document.querySelector(".mic-icon");
const searchBarContainer = document.querySelector(".search-container");


magnifying.addEventListener("click", ()=> {
    searchBarContainer.classList.toggle("active");
})