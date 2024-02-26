import { useRef } from 'react';
import { ShaderMaterial } from 'three';

// Example vertex and fragment shaders
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position,  1.0);
  }
`;

// Define the fragment shader
const fragmentShader = `
  uniform vec3 color;
  varying vec2 vUv;
  void main() {
    gl_FragColor = vec4(color,  1.0);
  }
`;

// Create a custom shader material
const CustomShaderMaterial = new ShaderMaterial({
  vertexShader,
  fragmentShader,
  uniforms: {
    color: { value: [0,  1,  0] }, // RGB values for green
  },
});

// Define the LaserBeam component
const LaserBeam = () => {
  return (
    <mesh>
      <cylinderGeometry args={[0.01,  0.01,  5,  32]} />
      <primitive object={CustomShaderMaterial} />
    </mesh>
  );
};

export default LaserBeam