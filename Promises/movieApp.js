function slideShow() {
  let arr = [
    "https://shifu.hotstarext.com/SOURCE/VOD/cd-2023-04-01/3RTSapr1_desk-0dbab5aa-f5ce-4584-9bd2-9129a47cb5a0.jpg",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4248/1364248-h-04994afb88d4",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5425/1505425-h-a853b781a31b",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/379/1500379-h-9e9ef3a6edfb",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4266/1364266-h-470552ba960d",
  ];

  let i = 0;
  let container = document.querySelector("#slideShow");
  let img = document.createElement("img");
  img.src = arr[0];
  container.append(img);
  i = i + 1;
  setInterval(function () {
    if (i == 5) {
      i = 0;
    }
    img.src = arr[i];
    container.append(img);
    i++;
  }, 3000);
}

slideShow();

function Display(data) {
let containerr = document.querySelector("#basic");
  containerr.innerHTML = null;
  data.forEach(function (ele) {
    let product = document.createElement("div");
    let img = document.createElement("img");
    img.src = ele.img;
    let name = document.createElement("h1");
    name.innerText = ele.brand;
    let price = document.createElement("h2");
    price.innerText = ele.price;
    let catagory = document.createElement("p");
    catagory.innerText = ele.catagory;
    let cart = document.createElement("button");
    cart.innerText = "add to cart";
    cart.addEventListener("click", function () {
      AddToCart(ele);
    });
    product.append(img, name, price, catagory, cart);
    containerr.append(product);
  });
}



let dataPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let data = product_data;

    if (data != null) {
      resolve(data);
    } else {
      reject("ERR: Server could not get you data");
    }
  }, 5000);
});


dataPromise.then(function(res){
Display(res);
}).catch(function (err){
console.log("err:", err)


})







