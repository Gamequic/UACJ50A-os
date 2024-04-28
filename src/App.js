import './App.css';
import BackgroundUACJ from './componentes/Background';
import CategoryUACJ from './componentes/CategoryContainer/CategoryContainer';
import EventUACJ from './componentes/EventUACJ';
import FooterUACJ from './componentes/Footer';
import NavBarUACJ from './componentes/NavBar';

import { Spacer } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";

function App() {
  return (
    <div className="App">
      <BackgroundUACJ>
        <NavBarUACJ></NavBarUACJ>
        <h1 className="text-xl font-bold text-white" >¡Próximos eventos!</h1>
        <Spacer y={6} />
        <div className="flex flex-wrap justify-center items-center">
          <CategoryUACJ
            image={`${process.env.PUBLIC_URL}/Photos/CoverPage/Deportivos.jpeg`}
            title='Eventos deportivos'
          >
            <Accordion>
              <AccordionItem key="1" aria-label="Ping Pong" title="Ping Pong">
                <EventUACJ
                  link={`${process.env.PUBLIC_URL}/Files/Convocatoria torneo de ping pong.docx`}
                  info={'El Instituto de Ingeniería y Tecnología de la UACJ invita a la comunidad universitaria a participar en un torneo de Ping Pong en conmemoración de 50 años de ingeniería en la institución. El evento se llevará a cabo los días viernes 12, 19 y 26 de abril y 3 de mayo en la Plaza de la Fraternidad del instituto.'}
                  qr={`${process.env.PUBLIC_URL}/Photos/Logos/QR's/PingPong.svg`}
                />
              </AccordionItem>
              <AccordionItem key="2" aria-label="Fútbol" title="Fútbol">
              <EventUACJ
                  link={`${process.env.PUBLIC_URL}/Files/Convocatoria torneo mixto de futbol IIT.docx`}
                  info={'Torneo recreativo de Fútbol calle mixto en conmemoración de sus 50 años de ingeniería. El evento se llevará a cabo los días viernes 12, 19 y 26 de abril y 3 de mayo en la Plaza de la Fraternidad del instituto. Se invita a formar equipos mixtos de hasta 8 integrantes, con dos jugadoras y dos jugadores en el cuadro en juego.'}
                  qr={`${process.env.PUBLIC_URL}/Photos/Logos/QR's/Futbol.svg`}
                />
              </AccordionItem>
            </Accordion>
          </CategoryUACJ>
          <CategoryUACJ
            image={`${process.env.PUBLIC_URL}/Photos/CoverPage/Culturales.jpg`}
            title='Eventos culturales'
          ></CategoryUACJ>
          <CategoryUACJ
            image={`${process.env.PUBLIC_URL}/Photos/CoverPage/Arduino.jpg`}
            title='Eventos ingenieria'
          >
            <Accordion>
              <AccordionItem key="1" aria-label="Mouseke-olimpiadas" title="Mouseke-olimpiadas">
                <EventUACJ
                  link={`${process.env.PUBLIC_URL}/Files/Mousek.docx`}
                  info={'Competencia de Mouseke-olimpiadas como parte de las celebraciones del 30 Aniversario del Instituto, el 06 de mayo de 2024, de 10:00 AM a 02:00 PM en el vestíbulo Y-4. Se considerarán tres competidores por equipo, inscritos en el semestre actual de licenciatura, con un representante (profesor) por equipo.'}
                  qr={`${process.env.PUBLIC_URL}/Photos/Logos/QR's/Mousek.svg`}
                />
              </AccordionItem>
              <AccordionItem key="2" aria-label="Maratón de Programación y Algoritmia" title="Maratón de Programación y Algoritmia">
              <EventUACJ
                  link={`${process.env.PUBLIC_URL}/Files/Reglamento Maraton de programacion y algoritmia.docx`}
                  info={'El maratón será dividido en dos categorías, Algoritmia se llevará a cabo el 9 de abril de 2024, de 10:00 de la mañana a 6:00 de la tarde, mientras que el de Programación se celebrará el 9 y 10 de abril del presente año, en el Instituto de Ingeniería y Tecnología (IIT) y en Ciudad Universitaria, los eventos serán simultáneos en los institutos y contarán con un receso.'}
                />
              </AccordionItem>
            </Accordion>
          </CategoryUACJ>
        </div>
        <Spacer y={6} />
        <FooterUACJ></FooterUACJ>
      </BackgroundUACJ>
    </div>
  );
}

export default App;
