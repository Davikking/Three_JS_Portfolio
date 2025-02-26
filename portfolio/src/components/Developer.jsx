import React, { useEffect, useRef } from 'react';
import { useGraph } from '@react-three/fiber';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

const Developer = ({ animationName = 'idle', ...props }) => {
    const group = useRef();

    const { scene } = useGLTF('/models/Avatar.glb');
    const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
    const { nodes, materials } = useGraph(clone);

    const { animations: idleAnimation } = useFBX('/models/animations/happy.fbx');
    //const { animations: saluteAnimation } = useFBX('/models/animations/salute.fbx');
    //const { animations: clappingAnimation } = useFBX('/models/animations/clapping.fbx');
    //const { animations: victoryAnimation } = useFBX('/models/animations/victory.fbx');

    const { animations: fingerAnimation } = useFBX('/models/animations/Pointing Gesture.fbx');
    const { animations: danceAnimation } = useFBX('/models/animations/dance.fbx');
    const { animations: stretchAnimation } = useFBX('/models/animations/stretch.fbx');


    idleAnimation[0].name = 'idle';
    //saluteAnimation[0].name = 'salute';
    //clappingAnimation[0].name = 'clapping';
    //victoryAnimation[0].name = 'victory';
    fingerAnimation[0].name = 'fingers';
    danceAnimation[0].name = 'dance';
    stretchAnimation[0].name = 'stretch';

    const { actions } = useAnimations(
        [
            idleAnimation[0],
            //saluteAnimation[0],
            //clappingAnimation[0],
            //victoryAnimation[0],
            fingerAnimation[0],
            danceAnimation[0],
            stretchAnimation[0]
        ],
        group
    );

    useEffect(() => {
        if (actions[animationName]) {
            actions[animationName].reset().fadeIn(0.5).play();
            return () => actions[animationName]?.fadeOut(0.5);
        } else {
            console.warn(`Animation "${animationName}" not found.`);
        }
    }, [animationName, actions]);

    return (
        <group {...props} dispose={null} ref={group}>
            <skinnedMesh
                geometry={nodes.body.geometry}
                material={materials.body}
                skeleton={nodes.body.skeleton}
            />
            <skinnedMesh
                geometry={nodes.bottom.geometry}
                material={materials.bottom}
                skeleton={nodes.bottom.skeleton}
            />
            <skinnedMesh
                geometry={nodes.eye_left.geometry}
                material={materials.eye}
                skeleton={nodes.eye_left.skeleton}
            />
            <skinnedMesh
                geometry={nodes.eye_right.geometry}
                material={materials.eye}
                skeleton={nodes.eye_right.skeleton}
            />
            <skinnedMesh
                geometry={nodes.footwear.geometry}
                material={materials.footwear}
                skeleton={nodes.footwear.skeleton}
            />
            <skinnedMesh
                geometry={nodes.hair.geometry}
                material={materials.hair}
                skeleton={nodes.hair.skeleton}
            />
            <skinnedMesh
                geometry={nodes.head.geometry}
                material={materials.head}
                skeleton={nodes.head.skeleton}
            />
            <skinnedMesh
                geometry={nodes.teeth.geometry}
                material={materials.teeth}
                skeleton={nodes.teeth.skeleton}
            />
            <skinnedMesh
                geometry={nodes.tongue.geometry}
                material={materials.teeth}
                skeleton={nodes.tongue.skeleton}
            />
            <skinnedMesh
                geometry={nodes.top.geometry}
                material={materials.top}
                skeleton={nodes.top.skeleton}
            />
            <primitive object={nodes.Hips} />
        </group>
    );
};

useGLTF.preload('/models/Avatar.glb');

export default Developer;