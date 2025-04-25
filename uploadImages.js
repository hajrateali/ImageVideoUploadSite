let token = "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";
let repo = "Image";
let owner = "Shamaali86055";

function hhhh() {
  let main = document.createElement("div");
  main.className = "main";
  document.body.appendChild(main);

  let imgup = document.querySelector(".imgup");

  imgup.onchange = () => {
    Array.from(imgup.files).forEach(d => {
      let reader = new FileReader();
      reader.onload = () => {
        let base64Content = reader.result.split(",")[1];
        let apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${d.name}`;

        fetch(apiUrl, {
          method: "PUT",
          headers: {
            "Authorization": "token " + token,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            message: "Upload image: " + d.name,
            content: base64Content
          })
        })
        .then(r => r.json())
        .then(rec => {
          let img = new Image();
          img.src = rec.content.download_url;
          main.appendChild(img);
        });
      };
      reader.readAsDataURL(d);
    });
  };
}
hhhh();