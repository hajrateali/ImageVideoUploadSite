
let repo2 = "Videos";

function uploadvideo() {
  let main = document.createElement("div");
  main.className = "main";
  document.body.appendChild(main);
  let vidup = document.querySelector(".vidup");
  
  vidup.onchange = () => {
    Array.from(vidup.files).forEach(d => {
      let reader = new FileReader();
      reader.onload = () => {
        let base64Content = reader.result.split(",")[1];
        let apiUrl = `https://api.github.com/repos/${owner}/${repo2}/contents/${d.name}`;
        
        fetch(apiUrl, {
          method: "PUT",
          headers: {
            "Authorization": "token " + token,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            message: "Upload Video: " + d.name,
            content: base64Content
          })
        })
        .then(res => res.json())
        .then(data => console.log("Uploaded:", data))
        .catch(err => console.error("Error:", err));
      };

      // Yahi line har file ke andar lagani hai
      reader.readAsDataURL(d);
    });
  };
}
uploadvideo();