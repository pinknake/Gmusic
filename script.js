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

let currentIndex = -1;

const audio = document.getElementById("audioPlayer");
const titleElement = document.getElementById("title");
const cover = document.getElementById("cover");
const songList = document.getElementById("songList");
const searchInput = document.getElementById("search");

// Play song
function playSong(index) {
  const song = songs[index];
  if (!song) return;
  currentIndex = index;
  audio.src = song.src;
  titleElement.innerText = song.title;
  cover.src = song.cover || "covers/default.jpg";
  audio.play();
}

// Auto play next
audio.addEventListener("ended", () => {
  let nextIndex = (currentIndex + 1) % songs.length;
  playSong(nextIndex);
});

// Render all songs
function renderSongs(filter = "") {
  songList.innerHTML = "";
  songs.forEach((song, index) => {
    if (song.title.toLowerCase().includes(filter.toLowerCase())) {
      const li = document.createElement("li");
      li.innerText = "🎵 " + song.title;
      li.addEventListener("click", () => playSong(index));
      songList.appendChild(li);
    }
  });
}

// Search event
searchInput.addEventListener("input", () => {
  const query = searchInput.value;
  renderSongs(query);
});

// Initial render
renderSongs();
