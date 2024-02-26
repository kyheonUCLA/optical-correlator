"use client"
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";
import { OrbitControls } from "@react-three/drei";
import LaserPointer from "../models/LaserPointer"

import { useModelContext } from "../contexts/ModelContextProvider";
import GenerateModel from "../components/GenerateModel";

import ConvexLens from "../models/ConvexLens";
import TronRing from "../models/TronRIng";
import Slit from "../models/Slit";
import LaserBeam from "../models/LightBeam";


const Simulation = () => {
  const { inputModel, filterModel, outputModel } = useModelContext()

  

  return (
    <section className="w-full h-full bg-transparent resize-y">
      <Suspense fallback={<Loader />}>
        <Canvas camera={{ near: 0.1, far: 1000, position: [0, 0, 20]}}>
          <color attach="background" args={['#808080']} />
          <OrbitControls />
          <directionalLight position={[1,1,1]} intensity={2}/>
          <ambientLight intensity={0.5}/>
          <hemisphereLight color={"#b1e1ff"}  groundColor={"#000000"} intensity={1}/>

          { inputModel ? <GenerateModel model={inputModel}/> : <Slit /> }
          { outputModel ? <GenerateModel model={outputModel}/> : <Slit /> }

          {/* <LaserBeam /> */}

          <ConvexLens />
          <TronRing />
          <LaserPointer />
        </Canvas>
      </Suspense>

    </section>
  )
}

export default Simulation