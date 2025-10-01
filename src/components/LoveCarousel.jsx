// src/components/LoveCarousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/styles.css';

const LoveCarousel = () => {
  return (
    <div className="carousel-container">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1} // Siempre 1 tarjeta visible
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="card">
            <h2>Mi Amor</h2>
            <img src="public/images/img1.png" alt="Recuerdo especial" className="card-img" />
            <p>
              Hoy celebramos 2 meses juntos, y aunque parezca poco, siento que te conozco desde toda la vida. Estar contigo me hace sentir que he encontrado mi lugar seguro, mi tesoro más preciado y mi compañera perfecta. En ti descubrí la paz, el cariño y la complicidad que siempre soñé. Cada momento a tu lado me recuerda que el amor verdadero existe y que yo lo encontré en ti. Eres quien convierte lo cotidiano en especial y quien le da sentido a mis días con tu sola presencia. No necesito nada más que seguir construyendo contigo esta historia que apenas comienza, pero que ya se siente infinita. Te prometo que voy a cuidar de este amor con todo lo que soy, porque tú eres mi mayor fortuna y mi más hermoso destino.
            </p>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="card">
            <h2>Gracias, mi amort</h2>
            <img src="public/images/img3.jpg" alt="Recuerdo juntos" className="card-img" />
            <p>
              Gracias amort por tu paciencia, tu ternura y tu alegría que iluminan mis días incluso en los momentos más difíciles. Agradezco tu manera de apoyarme, de motivarme y de recordarme que juntos somos capaces de lograr grandes cosas. Me haces sentir valioso, fuerte y capaz, y eso no tiene precio. También valoro profundamente tu cariño y respeto hacia mi familia, el trato con mis papás y mi hermano, y ese corazón tan noble que se refleja en cada gesto hacia mis dos angelitos, mis abuelitas, que siempre estarán presentes en mi vida. Tu bondad y tu forma de ser me inspiran a ser mejor cada día, porque contigo entendí que el verdadero amor no se trata solo de sentir, sino de compartir, cuidar y caminar juntos hacia adelante. Por todo lo que eres, por todo lo que haces, y por lo que me das, te agradezco infinitamente y quiero que sepas que voy a darlo TODO para que tengamos una familia.
            </p>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="card">
            <h2>La mejor fisioterapeuta</h2>
            <img src="public/images/img2.png" alt="Orgullo de ti" className="card-img" />
            <p>
              Admiro profundamente a la mujer maravillosa que eres, no solo como mi compañera de vida, sino también como la profesional apasionada que con tanto amor ejerce su vocación. Como fisioterapeuta, sé que entregas tu corazón en cada paciente, atendiendo cada caso como si se tratara de ti misma o de alguien de tu familia. Esa dedicación, tu esfuerzo y tu empeño son cualidades que me llenan de orgullo. Eres ejemplo de entrega, constancia y amor por lo que haces, y no tengo dudas de que eres la mejor en tu campo. Hoy, más que nunca, quiero decirte gracias por poner tu talento y tu pasión también en mi recuperación, por acompañarme en este proceso y darme fuerzas cuando siento que flaqueo. Tu apoyo en mi cirugía de rodilla no solo es sanador para mi cuerpo, sino también para mi corazón. Te admiro, te respeto y te amo.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default LoveCarousel;
