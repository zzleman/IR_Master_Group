import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Model = () => {
    const mountRef = useRef(null);
    const rendererRef = useRef(null);
    const cameraRef = useRef(null);
    const sceneRef = useRef(null);
    const centerRef = useRef(new THREE.Vector3());
    const cameraDistanceRef = useRef(7); 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const scene = new THREE.Scene();
        sceneRef.current = scene;

        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        cameraRef.current = camera;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        mountRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;
        
        const ambientLight = new THREE.AmbientLight(0xeeeeee, 2);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xeeeeee, 5);
        directionalLight.position.set(1, 30, 50).normalize();
        scene.add(directionalLight);

        const loadingManager = new THREE.LoadingManager(() => {
            setLoading(false);
        });

        const mtlLoader = new MTLLoader(loadingManager);
        const objLoader = new OBJLoader(loadingManager);
        const textureLoader = new THREE.TextureLoader();

        const imageTexture = textureLoader.load('/3d/image.png');

        mtlLoader.load('/3d/Foreman.mtl', (materials) => {
            materials.preload();
            objLoader.setMaterials(materials);

            objLoader.load('/3d/Foreman.obj', (object) => {
                object.scale.set(0.1, 0.1, 0.1);

                object.traverse((child) => {
                    if (child.isMesh) {
                        child.material.map = imageTexture;
                        child.material.needsUpdate = true;
                    }
                });

                const box = new THREE.Box3().setFromObject(object);
                const center = box.getCenter(new THREE.Vector3());
                centerRef.current.copy(center);
                object.position.sub(center);

                const size = box.getSize(new THREE.Vector3());
                let cameraDistance = Math.max(size.x, size.y, size.z) * 1; 
                cameraDistanceRef.current = cameraDistance;

                
                const screenWidth = window.innerWidth;

                
                if (screenWidth < 768) { 
                    cameraDistance *= 1; 
                } else if (screenWidth >= 768 && screenWidth < 1024) { 
                    cameraDistance *= 0.7; 
                } else { 
                    cameraDistance *= 0.9;
                }

                
                camera.position.set(0, 0, cameraDistance);
                camera.lookAt(center);

                scene.add(object);
                renderer.render(scene, camera);
            }, undefined, (error) => {
                console.error('An error occurred while loading the OBJ model:', error);
                setLoading(false);
            });
        }, undefined, (error) => {
            console.error('An error occurred while loading the MTL file:', error);
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

        const updateCameraPosition = () => {
            if (!sceneRef.current || !cameraRef.current) return;
            
            const camera = cameraRef.current;
            const center = centerRef.current;
            const cameraDistance = cameraDistanceRef.current;

            const screenWidth = window.innerWidth;

            let newCameraDistance = cameraDistance;
            if (screenWidth < 768) {
                newCameraDistance *= 1; 
            } else if (screenWidth >= 768 && screenWidth < 1024) { 
                newCameraDistance *= 0.7; 
            } else { 
                newCameraDistance *= 0.9; 
            }

            
            camera.position.set(0, 0, newCameraDistance);
            camera.lookAt(center);

            rendererRef.current.render(sceneRef.current, camera);
        };

        const handleResize = () => {
            const width = mountRef.current.clientWidth;
            const height = mountRef.current.clientHeight;
            cameraRef.current.aspect = width / height;
            cameraRef.current.updateProjectionMatrix();
            rendererRef.current.setSize(width, height);
            updateCameraPosition();
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            if (mountRef.current) {
                if (rendererRef.current) {
                    mountRef.current.removeChild(rendererRef.current.domElement);
                }
            }
            window.removeEventListener('resize', handleResize);

            if (sceneRef.current) {
                sceneRef.current.traverse((object) => {
                    if (object instanceof THREE.Mesh) {
                        object.geometry.dispose();
                        if (object.material instanceof THREE.Material) {
                            object.material.dispose();
                        }
                    }
                });
            }
            if (rendererRef.current) {
                rendererRef.current.dispose();
            }
        };
    }, []);

    return (
        <div className='relative w-full md:w-[700px] h-[450px] lg:h-[700px] mx-auto'>
            {loading && (
                <div className="loading-spinner absolute inset-0 flex items-center justify-center">
                    <div className="spinner"></div>
                </div>
            )}
            <div ref={mountRef} className="w-full h-full" />
        </div>
    );
};

export default Model;
