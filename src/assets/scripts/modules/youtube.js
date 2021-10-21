export const youtube = () => {
  
  const youtubeClose = document.getElementById('youtubeClose');
  const youtubeTrigger = document.getElementById('youtubeTrigger');
  const youtubeTarget = document.getElementById('youtubeTarget');
  const youtubeIframe = document.getElementById('youtubeIframe');
  const youtubeOverlay = document.getElementById('youtubeOverlay');
  
  if (youtubeTrigger && youtubeTarget) {

    try {
      youtubeTrigger.addEventListener('click', function (e) {
        youtubeTarget.classList.add('active');
        youtubeOverlay.classList.add('active');
      });
  
      youtubeClose.addEventListener('click', function (e) {
        youtubeTarget.classList.remove('active');
        youtubeIframe.src = youtubeIframe.src;
        youtubeOverlay.classList.remove('active');
      });
    } catch (error) {
      console.log('Handle error: youtube: ', error);
    }
    
  }
};
