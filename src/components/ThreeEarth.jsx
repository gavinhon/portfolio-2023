import React from 'react';
import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import gsap from 'gsap';
import earthImg from '../assets/earth.jpg';
//import spaceImg from '../../assets/space.jpg';
// npm install --save-dev vite-plugin-string so vite can read
import vertexShader from '../shaders/vertex.glsl';
import fragmentShader from '../shaders/fragment.glsl';
import atmosphereVertexShader from '../shaders/atmosphereVertex.glsl';
import atmosphereFragmentShader from '../shaders/atmosphereFragment.glsl';

function ThreeEarth() {
  useEffect(() => {
    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#bg'),
      antialias: true,
    });
    renderer.setClearColor(0x000000, 0);
    // set pixel ratio and full screen size; better resolutions
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    // get a better perspective
    camera.position.setZ(10);

    // render == DRAW
    renderer.render(scene, camera);

    // point light to all directions
    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(0, 0, 20);

    // like a flood light, light up everything equally
    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(pointLight, ambientLight);

    //const lightHelper = new THREE.PointLightHelper(pointLight);
    //const gridHelper = new THREE.GridHelper(200, 50);
    //scene.add(lightHelper, gridHelper);
    const controls = new OrbitControls(camera, renderer.domElement);
    // to disable zoom
    controls.enableZoom = false;

    // to disable rotation
    controls.enableRotate = false;

    // to disable pan
    controls.enablePan = false;
    // add background
    //const spaceTexture = new THREE.TextureLoader().load(spaceImg);
    //scene.background = spaceTexture;

    const earthTexture = new THREE.TextureLoader().load(earthImg);
    const earth = new THREE.Mesh(
      new THREE.SphereGeometry(3, 24, 24),
      //new THREE.MeshStandardMaterial({ map: earthTexture })
      new THREE.ShaderMaterial({
        vertexShader: vertexShader,
        // set color between vertices
        fragmentShader,
        uniforms: {
          globeTexture: {
            value: earthTexture,
          },
        },
      })
    );
    //scene.add(earth);
    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(3, 24, 24),
      new THREE.ShaderMaterial({
        vertexShader: atmosphereVertexShader,
        fragmentShader: atmosphereFragmentShader,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
      })
    );
    atmosphere.scale.set(1.1, 1.1, 1.1);

    scene.add(atmosphere);
    const group = new THREE.Group();
    // move group while still rotating
    group.add(earth);
    scene.add(group);

    function moveCamera() {
      // give dimensions of the viewport and how far user is from the top of the document
      const t = document.body.getBoundingClientRect().top;

      // rotate moon
      //earth.rotation.x += 0.05;
      earth.rotation.y += 0.075;
      //earth.rotation.z += 0.05;
      //if (t * -0.01 > 10) {
      //  camera.position.z = t * -0.01;
      //}
      //camera.position.x = t * 0.0045;
      //camera.position.y = t * -0.06;
    }

    document.body.onscroll = moveCamera;
    // responsive screen
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('resize', onWindowResize);

    const mouse = {
      x: 0,
      y: 0,
    };
    function mouseMove() {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }
    window.addEventListener('mousemove', mouseMove);

    // instead of rendere.render again and again, use animate
    function animateMesh() {
      requestAnimationFrame(animateMesh);
      earth.rotation.y += 0.001;
      controls.update();
      //group.rotation.y = mouse.x * 0.5;
      gsap.to(group.rotation, {
        x: -mouse.y * 0.3,
        y: mouse.x * 0.5,
        duration: 2,
      });
      renderer.render(scene, camera);
    }

    animateMesh();
  }, []);

  return <canvas id='bg'></canvas>;
}

export default ThreeEarth;
