import React from "react";
import Controls from "./Controls";
import { Model } from "./Dining-Set";
import { Environment, Center } from "@react-three/drei";
import Effects from "./Effects";

function Scene() {
  return (
    <>
      <Center>
        <Model />
      </Center>
      <Controls />
      <Effects />
      <Environment files={"/null.exr"} />
    </>
  );
}

export default Scene;
