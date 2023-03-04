const previewElem = document.getElementById("preview");
const button = document.querySelector("button");

button.addEventListener("click", async () => {
    const options = {
        video: {cusor: "always"},
        audio: false,
    };
previewElem.srcObject = await navigator.mediaDevices.getDisplayMedia(options);
});