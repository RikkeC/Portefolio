window.addEventListener("load", sidenvises)

function sidenvises() {
    console.log("sidenvises");
    document.querySelector("#mere").addEventListener("click", readMore);
}

function readMore() {
    console.log("readMore");
    document.querySelector("#box").classList.toggle("stor");
    document.querySelector("#box").classList.toggle("lille");
}
