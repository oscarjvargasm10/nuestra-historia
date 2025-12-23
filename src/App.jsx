import { useState } from 'react';
import LoveCarousel from './components/LoveCarousel';
import YouTubeAudioPlayer from './components/YouTubeAudioPlayer';
import ChristmasTicket from './components/ChristmasTicket';

function App() {
  const [activeTab, setActiveTab] = useState('christmas');

  const renderTabContent = () => {
    return (
      <div className="tab-panel">
        {activeTab === 'christmas' ? (
          <ChristmasTicket />
        ) : (
          <>
            <p className="tab-description">
              Un recorrido por nuestros momentos favoritos y por todo lo que siento por ti. 💗
            </p>
            <LoveCarousel />
          </>
        )}
      </div>
    );
  };

  return (
    <div className="app">
      <h1 className="title">💘 ¡FELIZ NAVIDAD!, Amort 💘</h1>

      {/* 🎶 Botón de música */}
      <YouTubeAudioPlayer />
      <br></br>
      <div className="tab-bar">
        <button
          type="button"
          className={`tab-button ${activeTab === 'story' ? 'active' : ''}`}
          onClick={() => setActiveTab('story')}
        >
          Nuestra historia
        </button>
        <button
          type="button"
          className={`tab-button ${activeTab === 'christmas' ? 'active' : ''}`}
          onClick={() => setActiveTab('christmas')}
        >
          Christmas 2025 🎄
        </button>
      </div>

      {renderTabContent()}

      <footer className="footer">
        Hecho con 💗 por Oscar Vargas
      </footer>
    </div>
  );
}


export default App;
