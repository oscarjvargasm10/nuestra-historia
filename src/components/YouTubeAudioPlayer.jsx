import React, { useEffect, useRef, useState } from "react";

const YouTubeAudioPlayer = () => {
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Cargar el script de la API de YouTube
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    // Crear el reproductor cuando la API está lista
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("yt-player", {
        height: "0",
        width: "0",
        videoId: "OTMQJ656r-M", // <-- tu ID de video
        playerVars: {
          autoplay: 0,
          loop: 1,
          playlist: "OTMQJ656r-M", // necesario para loop
        },
        events: {
          onReady: (event) => {
            console.log("YouTube Player listo");
          },
        },
      });
    };
  }, []);

  const togglePlay = () => {
    if (!playerRef.current) return;

    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="yt-audio-container">
      {/* Iframe invisible */}
      <div id="yt-player" style={{ display: "none" }}></div>

      {/* Botón Play/Pause */}
      <button className="yt-audio-button" onClick={togglePlay}>
        {isPlaying ? "⏸️ Pausar música" : "▶️ Reproducir música"}
      </button>
    </div>
  );
};

export default YouTubeAudioPlayer;
