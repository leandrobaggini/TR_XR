class SceneSelector extends Phaser.Scene{
    constructor(){
        super({key:"SceneSelector"});  
    }
    create(){
     console.log("Ready Selector");
    
     //BACKGROUND.
     this.add.image(360, 640, 'MenuSelector');
     this.add.image(550, 150, 'logo').setScale(.15);

     //UI.
     //Boton Pepino.
     this.add.sprite(100, 550,'selectPepi').setInteractive()
        .on ('pointerdown', () => console.log("Pepino_btn"))
        .on ('pointerdown', () => this.cntPepino.setAlpha(1))
        .on ('pointerdown', () => this.cntCaballeroRojo.setAlpha(0))
        .on ('pointerdown', () => this.cntMomia.setAlpha(0))
        .on ('pointerdown', () => this.cntMomiaN.setAlpha(0));
     //Boton CaballeroRojo.
     this.add.sprite(225, 550, 'selectCaba').setInteractive()
        .on ('pointerdown', () => console.log("Caballero_btn"))
        .on ('pointerdown', () => this.cntCaballeroRojo.setAlpha(1))
        .on ('pointerdown', () => this.cntMomia.setAlpha(0))
        .on ('pointerdown', () => this.cntMomiaN.setAlpha(0))
        .on ('pointerdown', () => this.cntPepino.setAlpha(0));
     //Boton Momia.
     this.add.sprite(100, 675, 'selectMomi').setInteractive()
        .on ('pointerdown', () => console.log("Momia_btn"))
        .on ('pointerdown', () => this.cntCaballeroRojo.setAlpha(0))
        .on ('pointerdown', () => this.cntMomia.setAlpha(1))
        .on ('pointerdown', () => this.cntMomiaN.setAlpha(0))
        .on ('pointerdown', () => this.cntPepino.setAlpha(0));
     //Boton Momia Negra.
     this.add.sprite(225, 675, 'selectMomiN').setInteractive()
        .on ('pointerdown', () => console.log("MomiaN_btn"))
        .on ('pointerdown', () => this.cntCaballeroRojo.setAlpha(0))
        .on ('pointerdown', () => this.cntMomia.setAlpha(0))
        .on ('pointerdown', () => this.cntMomiaN.setAlpha(1))
        .on ('pointerdown', () => this.cntPepino.setAlpha(0));

     this.add.sprite(100, 800, 'selectT').setInteractive()
        .on ('pointerdown', () => console.log("t_btn"));
     this.add.sprite(225, 800, 'selectT').setInteractive()
        .on ('pointerdown', () => console.log("MomiaN_btn1"));

     //Containers
     //PERSONAJES.
     this.imgPepino = this.add.image(500, 800, 'pepino').setScale(2);
     this.imgCaballero = this.add.image(500, 800, 'caballero').setScale(2);   
     this.imgMomia = this.add.image(500, 800, 'momia').setScale(1.5);
     this.imgMomiaN = this.add.image(500, 800, 'momiaNegra').setScale(1.2);
     //this.imgMartin = this.add.image(500, 800, 'martin').setScale(2);
     
     //TEXTOS PERSONAJES.
     this.txtCaballero = this.add.image(190, 1000, 'txtCaballero').setScale(.3);
     this.txtPepino = this.add.image(190, 1000, 'txtPepi').setScale(.3);
     this.txtMomia = this.add.image(190, 1000, 'txtMomia').setScale(.3);
     this.txtMomiaN = this.add.image(190, 1000, 'txtmNegra').setScale(.3);

     //Containers.CaballeroRojo
     this.cntCaballeroRojo = this.add.container(0,0, [this.imgCaballero, this.txtCaballero]).setAlpha(0);

     //Containers.Pepino
     this.cntPepino = this.add.container(0,0, [this.imgPepino, this.txtPepino]).setAlpha(1);

     //Containers.Momia
     this.cntMomia = this.add.container(0,0, [this.imgMomia, this.txtMomia]).setAlpha(0);

     //Containers.Momia
     this.cntMomiaN = this.add.container(0,0, [this.imgMomiaN, this.txtMomiaN]).setAlpha(0);

     //UI_inferior
     this.add.image(360,1180, 'recuadro').setScale(1.75);

     //UI_inferior.Textos.
     this.textoUno = this.add.text(50, 1150, '¡Elige a tu luchador favorito!',
     {font: '45px Century Gothic', color: 'white', align:'center'});

    }
}

export {SceneSelector};