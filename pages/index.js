import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import * as THREE from 'three';
import { useEffect } from 'react';


const AlexPic = 'alex.jpeg';
const SpacePic = 'space.jpg'
const MoonPic = 'moon.jpg';
const NormalPic = 'normal.jpg'

export default function Home() {




  useEffect(()=>{
    if( typeof window !== "undefined") {

      const scene = new THREE.Scene();
      
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      
      const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#bg'),
      });
      
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.position.setZ(30);
      camera.position.setX(-3);
      
      renderer.render(scene, camera);
      
      // Torus
      
      const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
      const material = new THREE.MeshStandardMaterial({ color: 'gold' });
      const torus = new THREE.Mesh(geometry, material);
      
      scene.add(torus);
      
      // Lights
      
      const pointLight = new THREE.PointLight(0xffffff);
      pointLight.position.set(5, 5, 5);
      
      const ambientLight = new THREE.AmbientLight(0xffffff);
      scene.add(pointLight, ambientLight);
      
      // Helpers
      
      // const lightHelper = new THREE.PointLightHelper(pointLight)
      // const gridHelper = new THREE.GridHelper(200, 50);
      // scene.add(lightHelper, gridHelper)
      
      // const controls = new OrbitControls(camera, renderer.domElement);
      
      function addStar() {
        const geometry = new THREE.SphereGeometry(0.25, 24, 24);
        const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
        const star = new THREE.Mesh(geometry, material);
      
        const [x, y, z] = Array(3)
          .fill()
          .map(() => THREE.MathUtils.randFloatSpread(100));
      
        star.position.set(x, y, z);
        scene.add(star);
      }
      
      Array(200).fill().forEach(addStar);
      
      // Background
      
      const spaceTexture = new THREE.TextureLoader().load(SpacePic);
      scene.background = spaceTexture;
      
      // Avatar
      
      const alexTexture = new THREE.TextureLoader().load(AlexPic);
      
      const alex = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: alexTexture }));
      
      scene.add(alex);
      
      // Moon
      
      const moonTexture = new THREE.TextureLoader().load(MoonPic);
      const normalTexture = new THREE.TextureLoader().load(NormalPic);
      
      const moon = new THREE.Mesh(
        new THREE.SphereGeometry(3, 350, 32),
        new THREE.MeshStandardMaterial({
          map: moonTexture,
          normalMap: normalTexture,
        })
      );
      
      scene.add(moon);
      
      moon.position.z = 30;
      moon.position.setX(-10);
      
      alex.position.z = -5;
      alex.position.x = 2;
      
      // Scroll Animation
      
      function moveCamera() {
        const t = document.body.getBoundingClientRect().top;
        moon.rotation.x += 0.05;
        moon.rotation.y += 0.075;
        moon.rotation.z += 0.05;
      
        alex.rotation.y += 0.01;
        alex.rotation.z += 0.01;
      
        camera.position.z = t * -0.01;
        camera.position.x = t * -0.0002;
        camera.rotation.y = t * -0.0002;
      }
      
      document.body.onscroll = moveCamera;
      moveCamera();
      
      // Animation Loop
      
      function animate() {
        requestAnimationFrame(animate);
      
        torus.rotation.x += 0.01;
        torus.rotation.y += 0.005;
        torus.rotation.z += 0.01;
      
        moon.rotation.x += 0.005;
      
        // controls.update();
      
        renderer.render(scene, camera);
      }
      
      animate();
      }
  }, [])


  return (
    <>
  
      <canvas id="bg"></canvas>   

      <main >
      <header>
        <h1>Alexander Long</h1>
      </header>


      <blockquote>
        <p>Frontend Engineer</p>
      </blockquote>

      <section>
        <h2>📜 About Me</h2>
        <p>
          A Frontend Engineer with 5 years of experience, my passion has mainly revolved around React web apps and frontend design systems.
        </p>
        <p>
          Based in Seattle, outside of work youll find me exploring the hikes and summits of the pacific northwest with my camera. 
        </p>
      </section>

      <section class="light">
        <h2>👩🏽‍🚀 Projects</h2>

        <p>
        Custom shopify store built with React, TS, and GraphQL. (Built while freelancing for Harmonic Northwest)
        
        <br/>
        <a  href="https://tspoolsupply.com">See project</a>

        </p>


        <p>
        Apple podcasts social media asset generator built with Vue. (Built while working as a frontend developer at Assemble Inc)
        <br/>
        <a href="https://tools.applemediaservices.com/podcast-promote/podcast/1559139153?country=us">See project </a>
         
        </p>

      </section>


      <section class="left">
        <h2>🌮 Work History</h2>

        <h3>Designory</h3>
        <h5>Frontend Engineer</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h3>Harmonic NW</h3>
        <h5>React Consultant</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h3>Assemble Inc.</h3>
        <h5>Frontend Engineer</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

      </section>
      </main>
    </>
  )
}
