const fileInputValid = document.querySelector("input");
downloadButton = document.querySelector("button");
downloadButton.addEventListener("click", e => {
    e.preventDefault();
    fetchFile(fileInputValid.value);
    downloadButton.innerText = " Downloading File ..."
});
function fetchFile(url) {
    fetch(url).then(result => result.blob()).then(file => {
        let tamplateUrl = URL.createObjectURL(file);
        let aTag = document.createElement("a");
        aTag.href = tamplateUrl;
        aTag.download = url.replace("/^.*[\\\/]/", " ");
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
        URL.revokeObjectURL(tamplateUrl);
        downloadButton.innerText = "Download"
    }).catch (() => {
        downloadButton.innerText = " Download"
        alert("Fild to Downlad File.!")
    })
}
