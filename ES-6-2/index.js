const searchVideos = async () => {
  const API_KEY = `AIzaSyComuizpAqpIx4R2AiiLCeaSVPItlcHV-c`;
  try {
    const query = document.getElementById("query").value;
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=250&q=${query}&key=${API_KEY}`
    );

    const data = await res.json();
    const actual_data = data.items;
    //console.log(actual_data);
    appendVideos(actual_data);
  } catch (error) {
    console.log("error:", error);
  }
};

let contentDiv = document.querySelector("#container");
const appendVideos = (data) => {
  contentDiv.innerHTML = null;
  data.forEach(({ snippet, id }) => {
    //console.log('elem', elem)
    //console.log("title", title);
    const videoId = id.videoId;
    const thumbnail = snippet.thumbnails.high.url;
    const channel = snippet.channelTitle;
    let div = document.createElement("div");
    const titleName = document.createElement("h6");
    titleName.innerText = snippet.title;
    const img = document.createElement("img");
    img.src = thumbnail;
    const channel_name = document.createElement("h4");
    channel_name.innerText = channel;

    let data = {
      videoId,
      snippet,
    };

    div.onclick = () => {
      storeClickedVideo(data);
    };

    div.append(img, titleName, channel_name);

    contentDiv.append(div);
  });
};


storeClickedVideo =(data)=>{


localStorage.setItem("clickedVideo",JSON.stringify(data));
window.location.href="video.html"
}
