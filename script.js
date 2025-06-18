const songs = [
  {
    title: "Vande Mataram",
    src: "songs/song1.mp3",
    cover: "covers/song1.jpg"
  },
  {
    title: "Desh Mere",
    src: "songs/song2.mp3",
    cover: "covers/song2.jpg"
  },
  {
    title: "Teri Mitti",
    src: "songs/song3.mp3",
    cover: "covers/song3.jpg"
  }
];

const audio = document.getElementById("audioPlayer");
const title = document.getElementById("title");
const cover = document.getElementById("cover");

function playSong(index) {
  const song = songs[index];
  audio.src = song.src;
  title.innerText = song.title;
  cover.src = song.cover;
  audio.play();
}
