const videoDetails = document.querySelector("#video_details");

playVideo = () => {
  videoDetails.innerHTML = null;
  let { videoId } = JSON.parse(localStorage.getItem("clickedVideo"));

  let iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  iframe.width = "100%";
  iframe.height = "100%";
  iframe.setAttribute('allowfullscreen',true);
  iframe.allow ='autoplay'

  videoDetails.append(iframe);
};
