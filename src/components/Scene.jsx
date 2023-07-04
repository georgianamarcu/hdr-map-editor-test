import React from "react";
import Controls from "./Controls";
import { Model } from "./Dining-Set";
import { Environment, Center } from "@react-three/drei";

function Scene() {
  return (
    <>
      <Center>
        <Model />
      </Center>
      <Controls />
      <Environment files={"/null.exr"} />
    </>
  );
}

export default Scene;
