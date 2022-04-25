function changeCSS(cssFile, cssLinkIndex) {
  var oldlink = document.getElementsByTagName('link').item(cssLinkIndex);

  var newlink = document.createElement('link');
  newlink.setAttribute('rel', 'stylesheet');
  newlink.setAttribute('type', 'text/css');
  newlink.setAttribute('href', cssFile);

  document
    .getElementsByTagName('head')
    .item(cssLinkIndex)
    .replaceChild(newlink, oldlink);
}

let player, iframe;
var tag = document.createElement('script');
tag.id = 'iframe-demo';
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  player = new YT.Player('presentPlayer', {
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
      onError: onPlayerError,
    },
  });
}

function onPlayerReady(event) {
  let presentID = player.getVideoData()['video_id'];
  console.log('the player is ready');
}

function onPlayerStateChange(event) {
  //When the video is over, update it with the next one.
  let displayedID = player.getVideoData()['video_id'];
  if (event.data === 0) {
    setTimeout(() => {
      queryNextRecomendation(displayedID);
    }, 0);
  }
}

async function queryNextRecomendation(displayedID = '') {
  let response = await fetch('/nextRecommendationQuery', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ videoID: displayedID }),
  });
  let recommendationData = await response.json();
  let presentID = player.getVideoData()['video_id'];
  if (recommendationData.recommendation.status === 'present') {
    recommendationData.elapsedSeconds =
      (new Date().getTime() -
        recommendationData.recommendation.startingRecommendationTimestamp) /
      1000;
  }
  if (recommendationData.recommendation.youtubeID !== presentID) {
    recommendationData.elapsedSeconds = 0;
    updateRecommendation(recommendationData);
  }
}

function onPlayerError(event) {
  console.log('There was an error with the player!');
}

function updateRecommendation(recommendationInformation) {
  queriedRecommendation = recommendationInformation.recommendation;
  player.loadVideoById(
    queriedRecommendation.youtubeID,
    recommendationInformation.elapsedSeconds
  );
  if (recommendationInformation.recommendation.status === 'past') {
    player.seekTo(0);
  }
}
