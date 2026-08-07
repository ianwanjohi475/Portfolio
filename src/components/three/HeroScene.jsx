import { Canvas } from '@react-three/fiber';
import { Float, Stars, MeshDistortMaterial, Environment } from '@react-three/drei';
import { Suspense } from 'react';

function Blob() {
  return (
    <Float speed={1.6} rotationIntensity={1.1} floatIntensity={1.4}>
      <mesh scale={2.1}>
        <icosahedronGeometry args={[1, 12]} />
        <MeshDistortMaterial
          color="#7c5cff"
          emissive="#22d3ee"
          emissiveIntensity={0.25}
          roughness={0.15}
          metalness={0.4}
          distort={0.38}
          speed={1.6}
        />
      </mesh>
    </Float>
  );
}

/**
 * The Hero's animated 3D backdrop: a distorting metaball drifting through a
 * starfield. Rendered on a low DPR cap so it stays cheap on mobile GPUs.
 */
export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ antialias: true, powerPreference: 'high-performance' }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[4, 5, 3]} intensity={1.4} />
        <pointLight position={[-6, -3, -4]} intensity={2} color="#22d3ee" />
        <Blob />
        <Stars radius={60} depth={40} count={2200} factor={3} fade speed={0.6} />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
