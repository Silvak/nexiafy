import {
  Color,
  IcosahedronGeometry,
  LinearFilter,
  Mesh,
  PerspectiveCamera,
  Scene,
  ShaderMaterial,
  Timer,
  WebGLRenderTarget,
  WebGLRenderer,
} from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { SavePass } from "three/examples/jsm/postprocessing/SavePass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { BlendShader } from "three/examples/jsm/shaders/BlendShader.js";
import { CopyShader } from "three/examples/jsm/shaders/CopyShader.js";

import {
  sphereFragmentShader,
  sphereVertexShader,
} from "@/components/landing/hero-sphere/sphereShaders";

const MAX_PIXEL_RATIO = 2;
const MOTION_BLUR_AMOUNT = 0.725;
const ROTATION_SPEED = 0.08;

export type SphereSceneOptions = {
  /** Same trail effect as the reference repo (SavePass + BlendShader). */
  motionBlur?: boolean;
};

export type SphereScene = {
  start: () => void;
  stop: () => void;
  /** Renders a single frame, used for the reduced-motion fallback. */
  renderOnce: () => void;
  resize: (width: number, height: number) => void;
  dispose: () => void;
};

function createComposer(
  renderer: WebGLRenderer,
  scene: Scene,
  camera: PerspectiveCamera,
  motionBlur: boolean,
) {
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));

  if (!motionBlur) return { composer, savePass: null };

  const savePass = new SavePass(
    new WebGLRenderTarget(1, 1, {
      minFilter: LinearFilter,
      magFilter: LinearFilter,
      stencilBuffer: false,
    }),
  );
  const blendPass = new ShaderPass(BlendShader, "tDiffuse1");
  blendPass.uniforms["tDiffuse2"].value = savePass.renderTarget.texture;
  blendPass.uniforms["mixRatio"].value = MOTION_BLUR_AMOUNT;

  const outputPass = new ShaderPass(CopyShader);
  outputPass.renderToScreen = true;

  composer.addPass(blendPass);
  composer.addPass(savePass);
  composer.addPass(outputPass);

  return { composer, savePass };
}

/**
 * Framework-agnostic Three.js scene: a noise-displaced, ribbed icosphere
 * with transparent background. The caller owns sizing and lifecycle.
 */
export function createSphereScene(
  canvas: HTMLCanvasElement,
  { motionBlur = false }: SphereSceneOptions = {},
): SphereScene {
  const renderer = new WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    premultipliedAlpha: false,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, MAX_PIXEL_RATIO));
  renderer.setClearColor(0x000000, 0);

  const scene = new Scene();
  const camera = new PerspectiveCamera(40, 1, 0.1, 100);
  camera.position.z = 4;

  const geometry = new IcosahedronGeometry(1, 64);
  const material = new ShaderMaterial({
    vertexShader: sphereVertexShader,
    fragmentShader: sphereFragmentShader,
    transparent: true,
    depthWrite: false,
    uniforms: {
      uTime: { value: 0 },
      uAmplitude: { value: 0.09 },
      uFrequency: { value: 1.1 },
      uStripes: { value: 24 },
      uOpacity: { value: 0.7 },
      uColorA: { value: new Color("#ff1f4b") },
      uColorB: { value: new Color("#3b5bff") },
    },
  });
  const sphere = new Mesh(geometry, material);
  scene.add(sphere);

  const { composer, savePass } = createComposer(
    renderer,
    scene,
    camera,
    motionBlur,
  );

  const timer = new Timer();
  let frameId: number | null = null;

  const render = () => {
    composer.render();
  };

  const tick = (timestamp: number) => {
    timer.update(timestamp);
    const elapsed = timer.getElapsed();
    material.uniforms.uTime.value = elapsed;
    sphere.rotation.y = elapsed * ROTATION_SPEED;
    render();
    frameId = requestAnimationFrame(tick);
  };

  return {
    start() {
      if (frameId !== null) return;
      timer.reset();
      frameId = requestAnimationFrame(tick);
    },
    stop() {
      if (frameId === null) return;
      cancelAnimationFrame(frameId);
      frameId = null;
    },
    renderOnce: render,
    resize(width, height) {
      if (width === 0 || height === 0) return;
      renderer.setSize(width, height, false);
      composer.setPixelRatio(renderer.getPixelRatio());
      composer.setSize(width, height);
      savePass?.setSize(
        width * renderer.getPixelRatio(),
        height * renderer.getPixelRatio(),
      );
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      render();
    },
    dispose() {
      if (frameId !== null) cancelAnimationFrame(frameId);
      frameId = null;
      timer.dispose();
      geometry.dispose();
      material.dispose();
      savePass?.dispose();
      composer.dispose();
      // No forceContextLoss(): React Strict Mode re-runs effects on the same
      // canvas, and a lost context cannot be reused.
      renderer.dispose();
    },
  };
}
