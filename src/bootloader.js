//[---] CARGA DE LOS ARCHIVOS [---].

class Bootloader extends Phaser.Scene{
    constructor(){
        super({key:"Bootloader"});
    }

    preload(){
        console.log("Ready Bootloader!");
       
        //[---]CARGA ASINCRONICA[---].
        
        //Progreso.
        /*
        this.load.on ("progress",()=>{
            this.add.image(640,360,'Cargando');
            this.load.image('Cargando','Assets/img/Pantalla1/FutbolBLur.png');
        });
        */
        //Completo.
        this.load.on("complete",()=>{
            this.scene.start("SceneMenu");
            console.log("me cargue");
        });    

        //[---]CARGA DE ASSETS[---].
        //this.load.image("nombre","ubicacion");

        //Backgrounds.
         this.load.image('MenuPrincipal','assets/background/fondo.png');
         this.load.image('MenuSelector','assets/background/fondoM2.png');
         this.load.image('logoCosmo','assets/UI/Logo_Cosmo.png');
         this.load.image('logoARjs','assets/UI/Logo-arjs.png');
         this.load.image('logo','assets/UI/logo.png');

         //Sprites.
         this.load.image('caballero', 'assets/sprites/caballero_01.png');
         this.load.image('momia', 'assets/sprites/momia_01.png');
         this.load.image('momiaNegra', 'assets/sprites/momianegra_01.png');
         this.load.image('pepino','assets/sprites/pepino_01.png');
       
         //UI.
         this.load.image('btnIniciar','assets/UI/btn_iniciar.png');
         this.load.image('btnCreditos','assets/UI/tri_creditos.png');

         //UI.recuadros
         this.load.image('selectPepi','assets/UI/pepino_recuadro.png');
         this.load.image('selectCaba','assets/UI/caballero_recuadro.png');
         this.load.image('selectMomi','assets/UI/momia_recuadro.png');
         this.load.image('selectMomiN','assets/UI/mnegra_recuadro.png');
         this.load.image('selectT','assets/UI/t_recuadro.png');

         //UI.base
         this.load.image('recuadro','assets/UI/UI_inf_m2.png');

         //UI.Txt
         this.load.image('txtMartin','assets/UI/textMartin.png');
         this.load.image('txtPepi','assets/UI/text_Pepino.png');
         this.load.image('txtMomia','assets/UI/text_momia.png');
         this.load.image('txtmNegra','assets/UI/text_mnegra.png');
         this.load.image('txtCaballero','assets/UI/textCaballero.png');

         //Music.
         this.load.audio('msTitanes','assets/music/titanes_music.ogg');
         this.load.audio('msCaballero','assets/music/caballero_music.ogg');
         this.load.audio('msMomia','assets/music/momia_music.ogg');
         this.load.audio('msPepino','assets/music/pepino_music.ogg');
        
    }
}

export default Bootloader;