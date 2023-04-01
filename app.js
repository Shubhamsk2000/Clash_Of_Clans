let hamMenu = document.getElementsByClassName("menu-container")[0];
let line1 = document.getElementsByClassName("line")[0];
let line2 = document.getElementsByClassName("line")[1];
let line3 = document.getElementsByClassName("line")[2];
let line = document.getElementById("line");
let menu = document.getElementsByClassName("menu-bar")[0];

let returnValue;

hamMenu.addEventListener('click', () => {
    line1.classList.toggle("line-1");
    line2.classList.toggle("line-3");
    line3.classList.toggle("line-2");
    returnValue = line.classList.contains("line-1");

    if (true) {
        menu.classList.toggle("translate");
    };
});

// logic for video player pop up
let playbutton = document.getElementsByClassName("play-button")[0];
let videoPlayer = document.getElementById("video-player");
let videoCon = document.getElementsByClassName("video-container")[0];
let bgScreenForvideo = document.getElementById("background-space-video");


playbutton.addEventListener('click', () => {

    videoPlayer.style.display = "block";
    playbutton.style.display = "none";

    videoCon.style.width = "900px";
    bgScreenForvideo.classList.add("bg-screen");
})

// let valueOfBg = bgScreenForvideo.classList.contains("bg-screen")





bgScreenForvideo.addEventListener("click", () => {
    videoPlayer.style.display = "none";

    playbutton.style.display = "block";
    bgScreenForvideo.classList.remove("bg-screen");
    videoCon.style.width = "100px";

    let iframe = document.querySelector("iframe");
    var iframeSrc = iframe.src;
    iframe.src = iframeSrc;
})

// logic for character line profile display
const listOfChars = [...document.getElementsByClassName("li")];
let char_container = [...document.getElementsByClassName("char-stat-container")];



listOfChars.forEach((element, index) => {
    element.addEventListener("click", () => {

        listOfChars.forEach(element2 => {
            element2.classList.remove("active");
        })

        char_container.forEach(el => {
            el.classList.remove("displayFlex")
        })

        char_container[index].classList.add("displayFlex")


        element.classList.add('active');


    });
});






