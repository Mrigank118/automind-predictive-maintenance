import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { useEffect, useState } from "react";

function Model() {
  const [obj, setObj] = useState(null);

  useEffect(() => {
    const loader = new FBXLoader();
    loader.load("/models/cybertruck.fbx", (o) => {
      o.scale.set(0.02, 0.02, 0.02);
      setObj(o);
    });
  }, []);

  return obj ? <primitive object={obj} /> : null;
}

export default function Chatbot() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <Canvas camera={{ position: [0, 3, 10] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} />
        <Model />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
