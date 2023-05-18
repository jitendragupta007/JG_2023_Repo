//f3d5c71f


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

  // .then & .catch way
  
// function searchMovies(){

// let movie_name= document.querySelector("#movie_name").value;

// let response= fetch(`http://www.omdbapi.com/?apikey=f3d5c71f&s=${movie_name}`);

// response.then(function(success){
// let data=success.json();

//    data.then(function(success){
//     appendMovies(susccess.search)

//     console.log("success", success);
//    }).catch(function(error){
//     console.log("error", Error)
    
//     });
// })
// .catch(function(error){
// console.log("error", Error)

// });

//  }

//  function appendMovies(){

//  }



//Async & Await way


async function searchMovies(){

let movie_name= document.querySelector("#movie_name").value;

try{

let response= await fetch(`http://www.omdbapi.com/?apikey=f3d5c71f&s=${movie_name}`);

let data = await response.json();
  //console.log("data", data)

let actual_data= data.Search;
//console.log("actual_data:", actual_data);
appendMovies(actual_data);
} 
catch (err){
    console.log("ERR", err);
}
// response.then(function(success){
// let data=success.json();

//    data.then(function(success){
//     appendMovies(susccess.search)

//     console.log("success", success);
//    }).catch(function(error){
//     console.log("error", Error)
    
//     });
// })
// .catch(function(error){
// console.log("error", Error)

// });

 }

searchMovies();

 function appendMovies(data){

let movies_div= document.querySelector("#movies_div");
movies_div.innerHTML= null;
data.forEach(function(elem){
let div= document.createElement("div");
let img=document.createElement("img");
img.src=elem.Poster;
div.append(img);
movies_div.append(div);
});
 }


 






