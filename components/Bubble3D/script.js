import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export class Bubble {
  constructor(window) {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // Sets the color of the background
    this.renderer.setClearColor(0xfefefe);

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    // Sets orbit control to move the camera around
    this.orbit = new OrbitControls(this.camera, this.renderer.domElement);

    // Camera positioning
    this.camera.position.set(6, 8, 14);
    this.orbit.update();

    // Sets a 12 by 12 gird helper
    const gridHelper = new THREE.GridHelper(12, 12);
    this.scene.add(gridHelper);

    // Sets the x, y, and z axes with each having a length of 4
    const axesHelper = new THREE.AxesHelper(4);
    this.scene.add(axesHelper);

    this.renderer.setAnimationLoop(() => {
      this.animate();
    });
  }

  animate() {
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return this.renderer.domElement;
  }

  addResizeEventListener(window) {
    this.listener = () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', this.listener);
    return () => {
      window.removeEventListener('resize', this.listener);
    };
  }
}
