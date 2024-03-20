"use client"
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import Loader from "../components/Loader";
import { OrbitControls } from "@react-three/drei";
import LaserPointer from "../models/LaserPointer"

import { useModelContext } from "../contexts/ModelContextProvider";
import GenerateModel from "../components/GenerateModel";

import ConvexLens from "../models/ConvexLens";
import TronRing from "../models/TronRIng";
import Slit from "../models/Slit";
import Model from "../models/Model";
import Test from "../components/Test";
import LightBeam from "../models/LightBeam";
import LightCone from "../models/LightCone";
import { useSimulationContext } from "../contexts/SimulationContextProvider";

// some issue where a subsequent fetch request is not being 
const Simulation = () => {
  const { inputModelUrl, filterModelUrl, outputModelUrl } = useModelContext()
  const { color } = useSimulationContext()


  return (
    <section className="w-full h-full bg-transparent resize-y">
      <Suspense fallback={<Loader />}>
        <Canvas camera={{ near: 0.1, far: 1000, position: [0, 0, 20]}}>
          <color attach="background" args={['#808080']} />
          <OrbitControls />
          <directionalLight position={[1,1,1]} intensity={2}/>
          <ambientLight intensity={0.5}/>
          <hemisphereLight color={"#b1e1ff"}  groundColor={"#000000"} intensity={1}/>

          { inputModelUrl.length > 0 ? <Model file={inputModelUrl} position={[-2, 0, 0]}/> : <Model file={"assets/3d/double_slit.gltf"} position={[-2, 0, 0]} /> }
          { outputModelUrl.length > 0 ? <Model file={outputModelUrl} position={[10, 0, 0]}/> : <Model file={"assets/3d/double_slit_diffraction.gltf"} position={[10, 0, 0]} /> }
          
          <LightCone color={color} position={[-15,0,0]} target={[-11,0,0]} angle={Math.PI/24}/>
          <LightBeam color={color} position={[-11,0,0]} target={[-2,0,0]} radius={1}/>
          <LightBeam color={color} position={[-2,0,0]} target={[10,0,0]} radius={1}/>

          <ConvexLens position={[-6, 0, 0]}/>
          {/* <TronRing /> */}
          <LaserPointer position={[-7, 0, 0]}/>
        </Canvas>
      </Suspense>

    </section>
  )
}

export default Simulation