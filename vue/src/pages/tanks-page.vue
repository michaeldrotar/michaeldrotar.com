<template>
  <div id="tanks">
    <canvas style="height: 500px; width: 800px"></canvas>
  </div>
</template>

<script>
// import Tanks from '../../games/tanks';
import BABYLON from 'babylonjs';

export default {
  name: 'tanks-page',
  data() {
    return {
      tanksGame: null,
      scene: null,
      engine: null,
    };
  },
  mounted() {
    // this.tanksGame = new Tanks({ canvas: document.getElementById('tanks') });
    // this.tanksGame.start();

    const canvas = document.getElementById('tanks').querySelector('canvas');
    const engine = new BABYLON.Engine(canvas, true);
    this.engine = engine;
    function createScene() {
      const scene = new BABYLON.Scene(engine);
      const camera = new BABYLON.ArcRotateCamera(
        'Camera',
        Math.PI / 2,
        Math.PI / 2,
        3,
        new BABYLON.Vector3(0, 0, 0),
        scene,
      );
      camera.attachControl(canvas, true);

      new BABYLON.HemisphericLight(
        'light1',
        new BABYLON.Vector3(1, 1, 0),
        scene,
      );
      new BABYLON.PointLight('light2', new BABYLON.Vector3(0, 1, -1), scene);

      BABYLON.MeshBuilder.CreateSphere('sphere', { diameter: 1 }, scene);

      let side1 = BABYLON.MeshBuilder.CreateBox(
        'sphere',
        { height: 2, width: 1, depth: 0.1 },
        scene,
      );
      side1.position = new BABYLON.Vector3(0, 0, 0.5);

      let side2 = BABYLON.MeshBuilder.CreateBox(
        'foo',
        { height: 2, width: 1, depth: 0.1 },
        scene,
      );
      side2.position = new BABYLON.Vector3(0, 0, -0.5);

      return scene;
    }
    const scene = createScene();
    this.scene = scene;
    engine.runRenderLoop(function () {
      scene.render();
    });
    window.addEventListener('resize', function () {
      engine.resize();
    });
  },
  destroyed() {
    // this.tanksGame.stop();
    this.scene.dispose();
    this.engine.dispose();
  },
};
</script>
