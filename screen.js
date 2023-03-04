const previewElem = document.getElementById("preview");
const button = document.querySelector("button");

button.addEventListener("click", async () => {
previewElem.srcObject = await navigator.mediaDevices.getDisplayMedia({
    video:{cusor:"always"},
     audio: false,
});
});