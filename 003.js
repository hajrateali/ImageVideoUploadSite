function imageShow() {
  document.querySelector(".main1").innerHTML = "";
  let main = document.createElement("div");
  main.className = "main";
  document.querySelector(".main1").appendChild(main);
  
  fetch('https://api.github.com/repos/Shamaali86055/Image/contents')
  .then(r => r.json())
  .then(d => {d.forEach(f => {
    if (f.name.endsWith(".jpg")) {
      let img = new Image();
      img.src = f.download_url;
      img.onclick = function() {
        toggleFullScreen(this);}
      main.appendChild(img);
    }
  })})
}


function videoShow() {
  document.querySelector(".main1").innerHTML = ""
  let main = document.createElement("div");
  main.className = "main";
  document.querySelector(".main1").appendChild(main);
  fetch('https://api.github.com/repos/Shamaali86055/Videos/contents')
  .then(r => r.json())
  .then(d => {d.forEach(f => {
    console.log(f);
    if (f.name.endsWith(".mp4")) {
      let vid = document.createElement("video");
      vid.src = f.download_url;
      vid.controls = true;
      main.appendChild(vid);
    }
  })})
}

function toggleFullScreen(img) {
    if (!document.fullscreenElement) {
        if (img.requestFullscreen) {
            img.requestFullscreen();
        } else if (img.webkitRequestFullscreen) {
            img.webkitRequestFullscreen();
        } else if (img.msRequestFullscreen) {
            img.msRequestFullscreen();
        }
    } 
}