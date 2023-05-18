

function storeImg(){
   

let imageArr=JSON.parse(localStorage.getItem("imgData"))||[]
let image= document.querySelector("#image").value;

  imageArr.push(image);

  console.log(imageArr);

  localStorage.setItem("imgData",JSON.stringify(imageArr))



}