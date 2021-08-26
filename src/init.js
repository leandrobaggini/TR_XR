import Bootloader from './bootloader.js';
import {SceneMenu} from './scenes/sceneMenu.js';
import {SceneSelector} from './scenes/sceneSelector.js';
//import {SceneGame} from './scenes/sceneGame.js';

//[---] VARIABLE DE CONFIGURACION E INICIO [---].

const config ={
    type: Phaser.AUTO,
    width: 720,
    height: 1280,
    parent: "contenedor",
    scale:{
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    resolution: 1,
    scene:[
        Bootloader,
        SceneMenu,
        SceneSelector
        //SceneGame
    ],
}

var game = new Phaser.Game (config);