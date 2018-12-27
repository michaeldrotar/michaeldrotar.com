import Scene from '../../lib/brick-engine/scene';

// import Ground from './ground';

export default class MainScene extends Scene {
  constructor() {
    super();
    // this.ground = new Ground();
  }
}

// export const MainScene2 = Scene.extend({
//   initialize(next) {
//     next();
//
//     Component = Brick.extend({});
//
//     CullingMask = Enum.extend({
//       choices: Layers,
//       multiple: true
//     });
//
//     Camera = Component.extend({
//       clearFlags: {
//         type: String,
//         enum: ['skybox', 'color', 'depth'],
//         default: 'color'
//       },
//       background: {
//         type: Color,
//         default: Color.BLACK,
//         visible: () => {
//           this.clearFlags === 'skybox' || this.clearFlags === 'color';
//         }
//       }
//     });
//
//     GameObject = Brick.extend({
//       initialize(next) {
//         next();
//
//         this.transform = Transform.new();
//       }
//     });
//
//     Camera = GameObject.extend({
//       initialize(next) {
//         next();
//       }
//     });
//
//     CameraRig = GameObject.extend({
//       initialize(next) {
//         next();
//       }
//     });
//
//     this.cameraRig = CameraRig.new({
//       transform: {
//         rotation: { x: 40, y: 60 }
//       }
//     });
//   }
// });
