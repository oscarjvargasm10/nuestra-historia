import LoveCarousel from './components/LoveCarousel';
import YouTubeAudioPlayer from "./components/YouTubeAudioPlayer";

function App() {
  return (
    <div className="app">
      <h1 className="title">💘 Felices 2 Meses, Amort 💘</h1>

      {/* 🎶 Botón de música */}
      <YouTubeAudioPlayer />
      <br></br>
      <LoveCarousel />
      <footer className="footer">
        Hecho con 💗 por Oscar Vargas
      </footer>
    </div>
  );
}


export default App;