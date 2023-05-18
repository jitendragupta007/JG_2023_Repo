

function user(n,e,p,u,m,d){
    this.name=n;
    this.email=e;
    this.password=p;
    this.username=u;
    this.mobile=m;
    this.descrition=d;

}

async function Register(){

const name=document.querySelector("#name").value;
const email=document.querySelector("#email").value;
const password=document.querySelector("#password").value;
const username=document.querySelector("#username").value;
const mobile=document.querySelector("#mobile").value;
const description=document.querySelector("#description").value;


let user_data= new user(name, email, password, username, mobile,description)

console.log(user_data);
const register_url=`https://masai-api-mocker.herokuapp.com/auth/register`
let res = await fetch(register_url,{
    method:'POST',
    body:JSON.stringify(user_data),
    headers:{
      'Content-Type':'application/json'
    },
});
let data= await res.json();
console.log(data)










}