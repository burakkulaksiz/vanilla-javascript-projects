class MusicPlayer {
  constructor(musicList) {
    this.musicList = musicList;
    this.index = 1;
  }

  getMusic() {
    return this.musicList[this.index];
  }

  next() {
    this.index + 1 < this.musicList.length ? this.index++ : (this.index = 0);
  }

  prev() {
    this.index != 0 ? this.index-- : (this.index = this.musicList.length - 1);
  }
}
