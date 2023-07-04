import React, { useRef } from "react";
import { useGLTF, MeshReflectorMaterial } from "@react-three/drei";
import * as THREE from "three";

export function Model(props) {
  const { nodes, materials } = useGLTF("/Dining_set.glb");
  return (
    <group {...props} dispose={null}>
      {/* <mesh
        geometry={nodes.Plane.geometry}
        material={materials.Table}
        position={[0, 0, -0.122433]}
      /> */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} name="reflector">
        <planeGeometry args={[1, 1]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={80}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#202025"
          metalness={0.5}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh
        geometry={nodes.DiningSet1003_Baked.geometry}
        material={materials["DiningSet1.003_Baked"]}
        position={[0.06917, 0.001885, -0.028166]}
        material-toneMapped={false}
      />
      <mesh
        geometry={nodes.Plate_Baked.geometry}
        material={materials.Plate_Baked}
        position={[0.074093, 0, -0.02897]}
      />
      <mesh
        geometry={nodes.DiningSet1004_Baked.geometry}
        material={materials["DiningSet1.004_Baked"]}
        position={[0.171198, 0.02906, 0.079172]}
        rotation={[-0.213446, 0.779834, 0.151244]}
        material-toneMapped={false}
      />
      <mesh
        geometry={nodes.DiningSet1006.geometry}
        material={materials["Perasima White.001"]}
        material-roughness={1}
        position={[-0.075083, 0.016239, -0.254234]}
        rotation={[0, -0.539574, 0]}
      />
      <mesh
        geometry={nodes.DiningSet1007_Baked.geometry}
        material={materials["DiningSet1.007_Baked"]}
        position={[0.185698, 0.036265, 0.072653]}
        rotation={[-0.150579, 0.808857, 1.471274]}
        material-toneMapped={false}
      />
      <mesh
        geometry={nodes.DiningSet1008_Baked.geometry}
        material={materials["DiningSet1.008_Baked"]}
        position={[0.020273, 0.049806, -0.212324]}
        rotation={[-0.649405, 1.079691, 0.614233]}
        material-toneMapped={false}
      />
      <mesh
        geometry={nodes.DiningSet1009.geometry}
        material={materials["Fabric White"]}
        position={[-0.137385, 0.00017, -0.0542]}
        rotation={[Math.PI / 2, 0, -0.121372]}
      />
      <mesh
        geometry={nodes.DiningSet1_Baked.geometry}
        material={materials.DiningSet1_Baked}
        position={[-0.137385, 0.00017, -0.0542]}
        rotation={[Math.PI / 2, 0, -0.121372]}
        material-toneMapped={false}
      />
    </group>
  );
}

useGLTF.preload("/Dining_set.glb");
