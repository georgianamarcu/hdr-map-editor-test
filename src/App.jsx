import { Canvas } from "@react-three/fiber";
import Scene from "./components/Scene";
import { Loader } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas
        dpr={1.5}
        gl={{ stencil: false, antialias: false, depth: false }}
        camera={{ fov: 35 }}
      >
        <Scene />
      </Canvas>
      <Loader />
    </>
  );
}

export default App;
