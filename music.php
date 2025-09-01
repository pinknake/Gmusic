<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>🇮🇳 Bharat Music 🎶</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Poppins', sans-serif;
      margin: 0;
      background: linear-gradient(to bottom, #121212, #1e1e1e);
      color: #fff;
      overflow-x: hidden;
    }
    header {
      background: #1db954;
      color: white;
      text-align: center;
      padding: 15px;
      font-size: 24px;
      font-weight: 600;
      letter-spacing: 1px;
    }
    .search-bar {
      padding: 15px;
    }
    .search-bar input {
      width: 100%;
      padding: 12px;
      border: none;
      border-radius: 25px;
      outline: none;
      font-size: 15px;
    }
    .songs-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
      gap: 15px;
      padding: 15px;
    }
    .song-card {
      background: #181818;
      border-radius: 12px;
      padding: 12px;
      text-align: center;
      cursor: pointer;
      transition: transform 0.2s;
    }
    .song-card:hover {
      transform: scale(1.05);
      background: #282828;
    }
    .song-card img {
      width: 100%;
      height: 140px;
      border-radius: 8px;
      object-fit: cover;
      margin-bottom: 10px;
    }
    .song-card strong {
      display: block;
      font-size: 14px;
      margin-bottom: 5px;
      color: #fff;
    }
    .song-card span {
      font-size: 12px;
      color: #b3b3b3;
    }
    .player {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: #282828;
      padding: 12px;
      display: flex;
      align-items: center;
      border-top: 2px solid #1db954;
      z-index: 1000;
    }
    .player img {
      width: 55px;
      height: 55px;
      border-radius: 8px;
      margin-right: 10px;
      object-fit: cover;
    }
    .player-info {
      flex: 1;
      overflow: hidden;
    }
    .player-info strong {
      display: block;
      font-size: 15px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .player-info span {
      font-size: 12px;
      color: #aaa;
    }
    audio {
      width: 120px;
    }
    .lyrics-box {
      background: rgba(255,255,255,0.05);
      margin: 10px;
      padding: 15px;
      border-radius: 10px;
      font-size: 13px;
      color: #ddd;
      max-height: 120px;
      overflow-y: auto;
    }
  </style>
</head>
<body>
  <header>🇮🇳 Bharat Music 🎶</header>
  
  <div class="search-bar">
    <input type="text" id="search" placeholder="🔍 Search your song...">
  </div>

  <div class="songs-grid" id="songList"></div>

  <!-- Lyrics -->
  <div class="lyrics-box" id="lyricsBox">🎶 Select a song to see lyrics...</div>

  <!-- Bottom Player -->
  <div class="player" id="player">
    <img id="cover" src="covers/default.jpg" alt="cover">
    <div class="player-info">
      <strong id="title">No song playing</strong>
      <span id="artist">---</span>
    </div>
    <audio id="audioPlayer" controls></audio>
  </div>

  <script>
    const songs = [
      {
        title: "Namo Namo Satguru",
        src: "songs/NAMO-NAMO-SATGURU-NAMO.mp3",
        cover: "covers/icon1.png",
        artist: "Radha Swami",
        lyrics: "🙏 Namo Namo Satguru Namo..."
      },
      {
        title: "Barambar Karu Vinti",
        src: "songs/02-BARAMBAR-KARU-VINTI-RADHA-SWAMI-AAGE.mp3",
        cover: "covers/default.jpg",
        artist: "Bhajan",
        lyrics: "🎶 Barambar Karu Vinti Radha Swami..."
      },
      {
        title: "Mere Pyare Guru Data",
        src: "songs/05-MERE-PYARE-GURU-DATA.mp3",
        cover: "covers/icon19.png",
        artist: "Radha Swami",
        lyrics: "💖 Mere Pyare Guru Data..."
      }
    ];

    let currentIndex = -1;
    const songList = document.getElementById("songList");
    const audio = document.getElementById("audioPlayer");
    const cover = document.getElementById("cover");
    const titleEl = document.getElementById("title");
    const artistEl = document.getElementById("artist");
    const lyricsBox = document.getElementById("lyricsBox");

    function renderSongs(filter = "") {
      songList.innerHTML = "";
      songs.forEach((song, index) => {
        if (song.title.toLowerCase().includes(filter.toLowerCase())) {
          const card = document.createElement("div");
          card.className = "song-card";
          card.innerHTML = `
            <img src="${song.cover}">
            <strong>${song.title}</strong>
            <span>${song.artist}</span>
          `;
          card.addEventListener("click", () => playSong(index));
          songList.appendChild(card);
        }
      });
    }

    function playSong(index) {
      const song = songs[index];
      currentIndex = index;
      audio.src = song.src;
      audio.play();
      cover.src = song.cover;
      titleEl.innerText = song.title;
      artistEl.innerText = song.artist;
      lyricsBox.innerText = song.lyrics || "🎵 No lyrics available.";
    }

    audio.addEventListener("ended", () => {
      let next = (currentIndex + 1) % songs.length;
      playSong(next);
    });

    document.getElementById("search").addEventListener("input", (e) => {
      renderSongs(e.target.value);
    });

    renderSongs();
  </script>
</body>
</html>
