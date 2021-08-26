class SceneMenu extends Phaser.Scene{
    constructor(){
        super({key:"SceneMenu"});
    }
    create(){

        console.log("Ready menu principal");
     
        //MAQUETADO ESCENA.
        //BACKGROUNDS.
        this.add.image(360,640, 'MenuPrincipal');
        let logo = this.add.image(360,300, 'logo').setScale(.3);
        this.add.image(150, 1200, 'logoCosmo').setScale(1.5);
        this.add.image(600, 1220, 'logoARjs').setScale(1.5);
                    
        
        //UI
        //Botones.
        this.btnIniciar = this.add.sprite(360,890,'btnIniciar').setInteractive()
                    .setScale(1.5)
                    .on ('pointerdown', () => this.scene.start('SceneSelector'));

        this.btnCreditos = this.add.sprite(360, 1240, 'btnCreditos').setScale(1.5);

        //Animaciones.
        /*this.tweenLogo = this.add.tween({
            targets: logo,
            props:{
                scaleX: {value: .1, duration: 1000, ease: 'Linear', repeat: -1, yoyo: true},
                scaleY: {value: .1, duration: 1000, ease: 'Linear', repeat: -1, yoyo: true}
            }
        });*/

        //Textos.
        this.textoUno = this.add.text(95, 980, '¡Explora el nuevo nivel de TITANES EN EL RING!',
        {font: '25px Century Gothic', color: 'white', align:'center'});

        this.textoDos = this.add.text(110, 1008, 'Ahora en REALIDAD AUMENTADA',
        {font: '32px Century Gothic', color: 'white', align:'center', fontStyle:'bold'});
    
    }
    
}
export {SceneMenu};