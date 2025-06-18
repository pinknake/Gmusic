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
const songList = document.getElementById("songList");


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
const songList = document.getElementById("songList");
    
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




// Render full song list
function renderSongs() {
  songList.innerHTML = '';
  songs.forEach((song, index) => {
    const li = document.createElement("li");
    li.innerText = "🎵 " + song.title;
    li.onclick = () => playSong(index);
    songList.appendChild(li);
  });
}

// Filter songs by search
function filterSongs() {
  const query = document.getElementById("search").value.toLowerCase();
  songList.innerHTML = '';
  songs.forEach((song, index) => {
    if (song.title.toLowerCase().includes(query)) {
      const li = document.createElement("li");
      li.innerText = "🎵 " + song.title;
      li.onclick = () => playSong(index);
      songList.appendChild(li);
    }
  });
}

window.onload = renderSongs;



    

