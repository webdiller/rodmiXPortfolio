export const youtube = () => {
  const youtubeTrigger = document.getElementById('youtubeTrigger');
  const youtubeTarget = document.getElementById('youtubeTarget');

  if (youtubeTrigger && youtubeTarget) {
    youtubeTrigger.addEventListener('click', function (e) {
      youtubeTarget.classList.add('active');
    });
  }
};
