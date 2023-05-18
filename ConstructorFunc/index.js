function nikeProduct(n,p){
    this.name=n;
    this.price=p;
}

let arr=[];

function addProduct(event){
event.preventDefault();
let form=document.querySelector("#product-data");
let name= form.name.value;
let price=form.price.value;

let product = new nikeProduct(name,price);

arr.push(product);
console.log(arr);

}


