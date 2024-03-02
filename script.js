const fileinput = document.querySelector("input"),
    downloadbtn = document.querySelector("button");

downloadbtn.addEventListener("click", e => {
    e.preventDefault();
    downloadbtn.innerText = "Downloading file ...";
    fetchFile(fileinput.value);
});

function fetchFile(url) {
    fetch(url).then(res => res.blob()).then(file => {
        let tempurl = URL.createObjectURL(file);
        // console.log(tempurl);
        let atag = document.createElement("a");
        atag.href = tempurl;
        atag.download = url.replace(/^-+[\\\/]/, '');
        document.body.appendChild(atag);
        atag.click();
        atag.remove();
        URL.revokeObjectURL(tempurl);
        downloadbtn.innerText = "Download file";
    }).catch(() => {
        downloadbtn.innerText = "Downloading file ";
        alert("Failed to download file!");
    });
}

