import { CameraControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import React, { useEffect } from "react";
import * as THREE from "three";

function Controls({
  position = new THREE.Vector3(-0.3, 0.2, 0.3),
  focus = new THREE.Vector3(0, 0, 0),
}) {
  const { controls, scene } = useThree();
  useEffect(() => {
    controls?.setLookAt(...position.toArray(), ...focus.toArray(), true);
  });
  return (
    <>
      <CameraControls makeDefault maxPolarAngle={Math.PI / 2} />
    </>
  );
}

export default Controls;
