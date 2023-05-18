// //Normal Function
// function NikeProduct(n,p){
//     let obj={};
//     obj.name=n,
//     obj.price=p
//     return obj;
// }

// let products= NikeProduct("shoes",3000)

// console.log(products)

// //Constructor Function == Factory Function

function nikeProduct(n, p) {
  (this.name = n), 
  (this.price = p);
}

// let product= new nikeProduct("shoes",8000);
// console.log(product);
// let product2= new nikeProduct("slipper",7000);
// product2.type= "black";
// console.log(product2)

let productForm = document.querySelector("#product_form");
productForm.addEventListener("submit", productFunc);
let productData = [];
function productFunc(event) {
  event.preventDefault();
  let name = document.querySelector("#name").value;
  let price = document.querySelector("#price").value;
  console.log(name,price)

  let products = new nikeProduct(name, price);
  productData.push(products);
  console.log(productData);
}
