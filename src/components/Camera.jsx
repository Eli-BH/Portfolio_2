/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 camera.gltf --transform 
Files: camera.gltf [31.19MB] > C:\Users\Elija\Documents\3d_camera_-_nikon_d3100_high_poly\camera-transformed.glb [2.01MB] (94%)
Author: Mickael Boitte (https://sketchfab.com/boittemike1)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/3d-camera-nikon-d3100-high-poly-ca72ad4a9b88473b8bd81e715c8503df
Title: 3D CAMERA - Nikon D3100 High Poly
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/models/camera-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.verre_verres_0.geometry}
        material={materials.verres}
        position={[-0.445, 0.023, 1.114]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.007}
      />
      <mesh
        geometry={nodes.lense_inter_lense_inter_0.geometry}
        material={materials.lense_inter}
        position={[-0.445, 0.026, 0.972]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.007}
      />
      <mesh
        geometry={nodes.lenseAV_lense_av_0.geometry}
        material={materials.lense_av}
        position={[-0.446, 0.023, 1.222]}
        scale={0.007}
      />
      <mesh
        geometry={nodes.lens_arriere_lense_ar_0.geometry}
        material={materials.lense_ar}
        position={[-0.475, 0.45, 0.582]}
        rotation={[0, 0, 0.038]}
        scale={0.007}
      />
      <mesh
        geometry={nodes.SD_SD_0.geometry}
        material={materials.material}
        position={[-0.45, 0.025, 0.177]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.007}
      />
      <mesh
        geometry={nodes.preflash_preflash_0.geometry}
        material={materials.preflash}
        position={[-0.865, 0.326, 0.011]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.007}
      />
      <mesh
        geometry={nodes.oeilleton_oeilleton_0.geometry}
        material={materials.oeilleton}
        position={[-0.45, 0.025, 0.177]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.007}
      />
      <mesh
        geometry={nodes.oeilleton_verre_oeilleton_verres_0.geometry}
        material={materials.oeilleton_verres}
        position={[-0.45, 0.025, 0.177]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.007}
      />
      <mesh
        geometry={nodes.ecran_ecrans_0.geometry}
        material={materials.ecrans}
        position={[-0.434, -0.037, -0.508]}
        rotation={[Math.PI / 2, 0, 3.125]}
        scale={0.007}
      />
      <mesh
        geometry={nodes.boitier_boitier_0.geometry}
        material={materials.boitier}
        rotation={[0, -0.031, 0]}
        scale={0.007}
      />
      <mesh
        geometry={nodes.visses_vis_0.geometry}
        material={materials.material_10}
        position={[-0.657, 0.398, 0.115]}
        rotation={[1.299, 0.02, 0.067]}
        scale={0.007}
      />
      <mesh
        geometry={nodes.btnModes_btnmodes_0.geometry}
        material={materials.btnmodes}
        position={[-0.919, 0.548, -0.222]}
        rotation={[0.026, 0.002, 0.061]}
        scale={0.007}
      />
      <mesh
        geometry={nodes.molettes_molettes_0.geometry}
        material={materials.molettes}
        position={[-0.654, 0.567, -0.486]}
        scale={0.007}
      />
      <mesh
        geometry={nodes.btns_btns_0.geometry}
        material={materials.btns}
        position={[-0.938, 0.128, -0.492]}
        rotation={[-1.647, 0.239, 0.018]}
        scale={0.007}
      />
      <mesh
        geometry={nodes.label_label_0.geometry}
        material={materials.label}
        position={[-0.445, 0.544, 0.363]}
        rotation={[0, -0.031, 0]}
        scale={0.007}
      />
      <mesh
        geometry={nodes.flash_flash_0.geometry}
        material={materials.flash}
        position={[-0.45, 0.672, -0.421]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.007}
      />
    </group>
  );
}

useGLTF.preload("/camera-transformed.glb");
