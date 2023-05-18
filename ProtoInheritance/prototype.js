// function nikeProduct(n,p){
//     this.name=p;
//     this.price=p;
// }

// let p = new nikeProduct("shoes",80000);
// console.log(p);

// nikeProduct.prototype.offer=function(){
// if(this.price>= 8000){
//    console.log("promo coupen is apllicable")
// } else{
//     return false;
// }
// };

// p.offer()

function student(n,c){
    this.name= n;
    this.class=c;
    this.assignment=0;
}
let s1=new student("Jeet", "web20");

student.prototype.subAssignment= function(){
    this.assignment++;
    console.log(this.assignment);
}


s1.subAssignment();
s1.subAssignment();
