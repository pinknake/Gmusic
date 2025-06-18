const songs = [
  {
    title: "KARU VINTI DOKARJODI",
    src: "songs/03 KARU VINTI DOKARJODI ARJ S",
  },
  {
    title: "Tone1",
    src: "songs/tone1",
  cover: "covers/icon19.png"
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
  const song =  {
    title: "KARU VINTI DOKARJODI",
    src: "songs/03 KARU VINTI DOKARJODI ARJ S",
  },
  {
    title: "Tone1",
    src: "songs/tone1",
  cover: "covers/icon19.png"
  },
  {
    title: "Teri Mitti",
    src: "songs/song3.mp3",
    cover: "covers/song3.jpg"
  }
];
let currentIndex = 0;

const audio = document.getElementById("audioPlayer");
const title = document.getElementById("title");
const cover = document.getElementById("cover");

function playSong(index) {
  currentIndex = index;
  const song = songs[index];
  audio.src = song.src;
  title.innerText = song.title;
  cover.src = song.cover;
  audio.play();
} 
    songs[index];
  audio.src = song.src;
  title.innerText = song.title;
  cover.src = song.cover;
  audio.play();
}
    
// Auto-play next song
audio.addEventListener("ended", function () {
  currentIndex = (currentIndex + 1) % songs.length;
  playSong(currentIndex);
});


