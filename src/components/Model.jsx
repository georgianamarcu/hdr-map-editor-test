import React from "react";

function Model() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={"red"} />
    </mesh>
  );
}

export default Model;
