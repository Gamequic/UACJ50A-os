import './App.css';
import NavBarUACJ from './componentes/NavBar';
import EventoUACJ from './componentes/EventoContainer';

import {Spacer} from "@nextui-org/react";

function App() {
  return (
    <div className="App">
      <NavBarUACJ></NavBarUACJ>
      <h1>¡Proximo eventos!</h1>
      <div className="flex center">
        <EventoUACJ />
        <Spacer x={4} />
        <EventoUACJ />
        <Spacer x={4} />
        <EventoUACJ />
      </div>
    </div>
  );
}

export default App;
