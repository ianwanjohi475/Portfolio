import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows } from '@react-three/drei';
import { Suspense, useRef } from 'react';

function Knot() {
  const ref = useRef();
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.35;
    ref.current.rotation.x += delta * 0.12;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.9}>
      <mesh ref={ref} scale={1.5} castShadow>
        <torusKnotGeometry args={[1, 0.32, 220, 32]} />
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#7c5cff"
          emissiveIntensity={0.35}
          metalness={0.85}
          roughness={0.18}
        />
      </mesh>
    </Float>
  );
}

/** A polished, self-contained 3D centrepiece for the featured section. */
export default function FeaturedObject() {
  return (
    <Canvas
      shadows
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 6], fov: 40 }}
      gl={{ antialias: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <spotLight position={[5, 8, 5]} angle={0.3} penumbra={1} intensity={2} castShadow />
        <pointLight position={[-6, -4, -3]} intensity={2.4} color="#f472b6" />
        <Knot />
        <ContactShadows position={[0, -2.2, 0]} opacity={0.4} scale={12} blur={2.6} far={4} />
        <Environment preset="night" />
      </Suspense>
    </Canvas>
  );
}
