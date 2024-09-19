interface VideoPlayerElements {
  videoPlayer: HTMLVideoElement;
  playButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
}

interface videoPlayerProtocols {
  playToggle(): void;
  stop(): void;
  iniciarEventos(): void;
}

export default class VideoPlayer implements VideoPlayerElements {
  private videoPlayer: HTMLVideoElement;
  private playButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;

  constructor(videoPlayerElements: VideoPlayerElements) {
    this.videoPlayer = videoPlayerElements.videoPlayer;
    this.playButton = videoPlayerElements.playButton;
    this.stopButton = videoPlayerElements.stopButton;
  }

  iniciarEventos(): void {
    this.playButton.addEventListener('click', () => {
      this.playToggle();
    });

    this.stopButton.addEventListener('click', () => {
      this.videoPlayer.pause();
      this.videoPlayer.currentTime = 0;
      this.playButton.innerText = 'Play';
    });
  }
  playToggle(): void {
    if (this.videoPlayer.paused) {
      this.videoPlayer.play();
      this.playButton.innerText = 'Pause';
    } else {
      this.videoPlayer.pause();
      this.playButton.innerText = 'Play';
    }
  }

  stop(): void {
    throw new Error('Method not implemented.');
  }

}

const videoPlayer = new VideoPlayer({
  videoPlayer: document.querySelector('.video') as HTMLDivElement, // Usar a tag usada no HTML
  playButton: document.querySelector('.play') as HTMLButtonElement,
  stopButton: document.querySelector('.stop')as HTMLButtonElement,
});
videoPlayer.iniciarEventos();
