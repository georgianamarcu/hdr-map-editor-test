import { Canvas } from "@react-three/fiber";
import Scene from "./components/Scene";

function App() {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ physicallyCorrectLights: true, antialias: true }}
      camera={{ fov: 35 }}
    >
      <Scene />
    </Canvas>
  );
}

export default App;
