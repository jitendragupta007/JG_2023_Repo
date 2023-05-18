let starts = document.getElementById("start");
starts.addEventListener("click", startGame);
 let containor=document.querySelector("#containor")

function startGame() {
  let images = JSON.parse(localStorage.getItem("imgData")) || [];
  let img = document.createElement("img");
  

  let i = 1;
  img.src= images[0];
  containor.append(img);
  setInterval(function () {
    if (i == 3) {
      i = 0;
    }
    img.src=images[i];
    containor.append(img);
    i++;
  }, 1000);
}
