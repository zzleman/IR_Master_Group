import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import "./ThreeScene.scss";

const ThreeScene = () => {
    const mountRef = useRef(null);
    const rendererRef = useRef(null);
    const cameraRef = useRef(null);
    const sceneRef = useRef(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const scene = new THREE.Scene();
        sceneRef.current = scene;

        const camera = new THREE.PerspectiveCamera(75, 700 / 700, 0.1, 1000);
        cameraRef.current = camera;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setClearColor(0x000000, 0); 
        renderer.setSize(700, 700);
        mountRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 5, 5).normalize();
        scene.add(directionalLight);

        // Create a loading manager
        const loadingManager = new THREE.LoadingManager(() => {
            // All assets are loaded, set loading to false
            setLoading(false);
        });

        const textureLoader = new THREE.TextureLoader(loadingManager);
        const objLoader = new OBJLoader(loadingManager);

        // Preload textures
        const headMaterialTextures = {
            map: textureLoader.load('/models/OFFSHORE WORKER FOR SUBSTANCE_worker_head_material_Diffuse.png'),
            normalMap: textureLoader.load('/models/OFFSHORE WORKER FOR SUBSTANCE_worker_head_material_Normal.png'),
            roughnessMap: textureLoader.load('/models/OFFSHORE WORKER FOR SUBSTANCE_worker_head_material_Roughness.png'),
            metalnessMap: textureLoader.load('/models/OFFSHORE WORKER FOR SUBSTANCE_worker_head_material_Metallic.png'),
            emissiveMap: textureLoader.load('/models/OFFSHORE WORKER FOR SUBSTANCE_worker_head_material_Emissive.png'),
            transparent: true,
        };

        const workerMaterialTextures = {
            map: textureLoader.load('/models/OFFSHORE WORKER FOR SUBSTANCE_Worker_material_Diffuse.png'),
            normalMap: textureLoader.load('/models/OFFSHORE WORKER FOR SUBSTANCE_Worker_material_Normal.png'),
            roughnessMap: textureLoader.load('/models/OFFSHORE WORKER FOR SUBSTANCE_Worker_material_Roughness.png'),
            metalnessMap: textureLoader.load('/models/OFFSHORE WORKER FOR SUBSTANCE_Worker_material_Metallic.png'),
            emissiveMap: textureLoader.load('/models/OFFSHORE WORKER FOR SUBSTANCE_Worker_material_Emissive.png'),
            transparent: true,
        };

        // Load the OBJ model
        objLoader.load('/models/WORKER_DELIVERY.obj', (object) => {
            object.scale.set(0.1, 0.1, 0.1);

            const box = new THREE.Box3().setFromObject(object);
            const center = box.getCenter(new THREE.Vector3());
            object.position.sub(center);

            const size = box.getSize(new THREE.Vector3());
            const cameraDistance = Math.max(size.x, size.y, size.z) * 0.8;
            camera.position.set(0, 0, cameraDistance);
            camera.lookAt(center);

            const scleraMaterial = new THREE.MeshStandardMaterial({
                color: 0xffffff,
                transparent: true,
            });

            const headMaterial = new THREE.MeshStandardMaterial(headMaterialTextures);
            const workerMaterial = new THREE.MeshStandardMaterial(workerMaterialTextures);

            object.traverse((child) => {
                if (child.isMesh) {
                    if (child.name.includes('SCLERA')) {
                        child.material = scleraMaterial;
                    } else if (child.name.includes('body_low')) {
                        child.material = workerMaterial;
                    } else if (child.name.includes('MALE_ANATOMY_LOW_POLY_DELIVERY')) {
                        child.material = headMaterial;
                    }
                }
            });

            scene.add(object);
            renderer.render(scene, camera);
        }, undefined, (error) => {
            console.error('An error occurred while loading the OBJ model:', error);
            setLoading(false);
        });

        camera.position.set(0, 0, 7);
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.screenSpacePanning = false;
        controls.enableZoom = false;

        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            const width = 700;
            const height = 700;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            mountRef.current.removeChild(renderer.domElement);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div style={{ position: 'relative', width: '700px', height: '700px' }}>
            {loading && (
                <div className="loading-spinner">
                    <div className="spinner"></div>
                </div>
            )}
            <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
        </div>
    );
};

export default ThreeScene;
