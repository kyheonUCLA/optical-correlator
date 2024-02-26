"use client";

import Upload from "./components/Upload";

import Simulation from "./windows/Simulation";
import ModelContextProvider from "./contexts/ModelContextProvider";
import Configurator from "./components/Configurator";
import SimulationContextProvider from "./contexts/SimulationContextProvider";
import Overlay from "./windows/Overlay";

export default function Home() {

  return (
    <main className="w-full h-screen relative">
        <ModelContextProvider>
          <SimulationContextProvider>
            <Overlay />
            <Simulation />
          </SimulationContextProvider>
        </ModelContextProvider>
    </main>
  );
}
