import React, { useState } from 'react';

const TicketDetail = ({ label, value, highlight }) => (
  <div className="ticket-detail">
    <p className="ticket-label">{label}</p>
    <p className={`ticket-value ${highlight ? 'highlight' : ''}`}>{value}</p>
  </div>
);

const ChristmasTicket = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="ticket-wrapper">
      <div className="ticket-card">
        <div className={`ticket-header ${isOpen ? 'is-open' : 'is-closed'}`}>
          <div>
            <p className="ticket-pretitle">Christmas Gift</p>
            {isOpen && <h2 className="ticket-title">Christmas 2025 - Ed Sheeran</h2>}
          </div>
          <div className="ticket-cta">
            <button
              type="button"
              className="ticket-badge"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              Gift 🎁
            </button>
            <span
              className={`ticket-cta-arrow ${isOpen ? 'is-open' : 'is-closed'}`}
              aria-hidden="true"
            />
          </div>
        </div>

        {isOpen && (
          <>
            <p className="ticket-intro">
              Para mi persona favorita: este es tu pase oficial para ver a Ed Sheeran en vivo en 2026.
              Quiero que cada canción que escuchemos juntos se sienta como este regalo de Navidad: lleno de
              emoción, color y mucho amor.
            </p>

            <div className="ticket-hero">
              <div className="ticket-loop-mark">
                <p className="loop-top">Ed Sheeran</p>
                <div className="loop-box">
                  <span className="loop-word">loop</span>
                  <span className="loop-tour">tour</span>
                </div>
              </div>
              <div className="ticket-hero-copy">
                <p className="hero-overline">Two hearts, one show</p>
                <p className="hero-headline">Nos vemos entre luces, guitarras y mucha magia</p>
              </div>
            </div>

            <div className="ticket-body">
              <TicketDetail label="Ciudad" value="Bogotá, Colombia" />
              <TicketDetail label="Venue" value="Vive Claro Distrito Cultural" />
              <TicketDetail label="Fecha" value="16 de mayo de 2026" highlight />
              <TicketDetail label="Hora" value="6:30 PM" />
              <TicketDetail label="Zona" value="Localidad - Preferencial" />
              <TicketDetail label="Asientos" value="Fila 1 -  juntos, siempre" />
              <TicketDetail label="Código de regalo" value="XMAS-LOOP-1226" />
              <TicketDetail label="Dress code" value="Algo cómodo para cantar a todo pulmón" />
            </div>

            <div className="ticket-divider" aria-hidden="true">
              <span className="ticket-dot" />
              <span className="ticket-dot" />
              <span className="ticket-dot" />
              <span className="ticket-dot" />
              <span className="ticket-dot" />
            </div>

            <div className="ticket-footer-note">
              <p>
                Llegaremos temprano, tomaremos fotos para agregarlas a la libretica y cuando empiece <em>Thinking Out Loud</em> te abrazaré
                como si el mundo se detuviera. Gracias por caminar conmigo hasta aquí; que este boleto sea
                solo el inicio de nuestras próximas aventuras.
              </p>
              <p className="ticket-signature">Con todo mi amor, Oscar</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChristmasTicket;
