import './App.css';
import EventoUACJ from './componentes/EventoContainer/EventoContainer';
import NavBarUACJ from './componentes/NavBar';

import {Spacer} from "@nextui-org/react";

function App() {
  return (
    <div className="App">
      <NavBarUACJ></NavBarUACJ>
      <h1 className="text-xl font-bold" >¡Proximo eventos!</h1>
      <Spacer y={6} />
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
