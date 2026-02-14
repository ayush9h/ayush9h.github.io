import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Sphere, useCursor } from "@react-three/drei";
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";


function Wall({ position, args }) {
  return (
    <>
      <CuboidCollider position={position} args={args} />
      <mesh position={position}>
        <boxGeometry args={[args[0] * 2, args[1] * 2, args[2] * 2]} />
        <meshStandardMaterial color="#ff6b6b" transparent opacity={0.3} />
      </mesh>
    </>
  );
}

function Arena() {
  return (
    <RigidBody type="fixed" restitution={0.6} friction={0}>
      <Wall position={[0, 0, -6]} args={[12, 1, 0.5]} />
      <Wall position={[0, 0, 6]} args={[12, 1, 0.5]} />
      
      <Wall position={[-8, 0, 0]} args={[0.5, 1, 6]} />
      <Wall position={[8, 0, 0]} args={[0.5, 1, 6]} />
    </RigidBody>
  );
}

function MouseGlider() {
  const rigidBody = useRef();
  const { viewport } = useThree();
  const [hovered, setHover] = useState(false);
  
  useCursor(hovered);

  useFrame(({ pointer }) => {
    if (!rigidBody.current) return;
    const x = (pointer.x * viewport.width) / 2;
    const z = -(pointer.y * viewport.height) / 2;
    rigidBody.current.setNextKinematicTranslation({ x, y: 0, z });
  });

  return (
    <RigidBody 
      ref={rigidBody} 
      type="kinematicPosition" 
      colliders="ball" 
      position={[0, 0, 0]}
    >
      <CuboidCollider args={[1.5, 1.5, 1.5]} />
      <Sphere 
        args={[0.5, 16, 16]} 
        onPointerOver={() => setHover(true)} 
        onPointerOut={() => setHover(false)}
      >
        <meshStandardMaterial color="white" opacity={0.2} transparent/>
      </Sphere>
    </RigidBody>
  );
}

function FloatingSpheres({ color, trigger }) {

  const [spheres, setSpheres] = useState(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * 8,
      z: (Math.random() - 0.5) * 4,
      blue: i % 2 === 0
    }));
  });

  const bodies = useRef({}); 
  useEffect(() => {
    spheres.forEach((sphere) => {
      const body = bodies.current[sphere.id];
      if (body) {
        const currentPos = body.translation();
        const dir = new THREE.Vector3(currentPos.x, 0, currentPos.z).normalize();
        body.applyImpulse(dir.multiplyScalar(30), true);
      }
    });
  }, [trigger, spheres]);
  const removeSphere = (id) => {
    setSpheres((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <group>
      {spheres.map((d) => (
        <RigidBody
          key={d.id}
          ref={(el) => (bodies.current[d.id] = el)}
          position={[d.x, 0, d.z]} 
          linearDamping={1}
          angularDamping={1}
          restitution={1.1}
          colliders="ball"
          enabledTranslations={[true, false, true]} 
          onClick={(e) => {
            e.stopPropagation(); 
            removeSphere(d.id);  
          }}
          onPointerOver={() => { document.body.style.cursor = 'pointer'; }}
          onPointerOut={() => { document.body.style.cursor = 'auto'; }}
        >
          <Sphere args={[0.6, 24, 24]}>
            <meshStandardMaterial
              color={d.blue ? color : "#111"}
              metalness={0.7}
              roughness={0.1}
            />
          </Sphere>
        </RigidBody>
      ))}
    </group>
  );
}

export default function Spheres() {
  const colors = ["#1e40ff", "#ff0000", "#facc15"];
  const [index, setIndex] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  return (
    <Canvas
      camera={{ position: [0, 10, 0], fov: 30 }} 
      onPointerDown={() => {
        setIndex((i) => (i + 1) % colors.length);
        setClickCount((c) => c + 1);
      }}
    >
      <Environment files="/image/studio_small_09_4k.hdr" intensity={0.6} />
      <Physics gravity={[0, 0, 0]}>
        <Arena />
        <MouseGlider />
        <FloatingSpheres color={colors[index]} trigger={clickCount} />
      </Physics>
    </Canvas>
  );
}