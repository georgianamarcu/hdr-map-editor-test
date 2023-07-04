import { Bloom, EffectComposer, SMAA } from "@react-three/postprocessing";
import { Suspense } from "react";

function Effects() {
  return (
    <Suspense>
      <EffectComposer disableNormalPass>
        <Bloom
          intensity={0.6}
          luminanceThreshold={0.95}
          luminanceSmoothing={1}
        />
        <SMAA />
      </EffectComposer>
    </Suspense>
  );
}

export default Effects;
