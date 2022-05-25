class Impresora {
    #marca
    #modelo
    #precio
    #id
    #color
    #bandejas
    #stock

constructor (marca,modelo,precio,id,color,bandejas,stock) {
    this.#marca= marca;
    this.#modelo= modelo;
    this.#precio= precio;
    this.#id= id;
    this.#color= color;
    this.#bandejas= bandejas;
    this.#stock= stock;
}

mostrarInfo() {
    let info=` MARCA: ${this.#marca} - MODELO: ${this.#modelo}- PRECIO: ${this.#precio}- ID: ${this.#id} - COLOR: ${this.#color} - BANDEJAS: ${this.#bandejas}` ;
    if (this.#stock==0) { 
        return `${info} - STOCK: No está disponible`
    }else{
        return `${info} - STOCK: ${this.#stock}`
    }

}

} 

class Impresora2 extends Impresora {
    #tecnologia
    #tipo
    #wifi
constructor (marca,modelo,precio,id,color,bandejas,stock,tecnologia,tipo,wifi) {
    super(marca,modelo,precio,id,color,bandejas,stock);
    this.#tecnologia= tecnologia;
    this.#tipo= tipo;
    this.#wifi= wifi;
}

mostrarInfo () {
    return `${super.mostrarInfo()} - TECNOLOGIA: ${this.#tecnologia} - TIPO: ${this.#tipo} - WIFI: ${this.#wifi}`;
}
}

let impresora1 = new Impresora (`Epson`, `EcotankL3210`,47000,1,`negro`,2,0);
let impresora2  = new Impresora2 (`Epson`, `EcotankL3250`,56000,2,`negro`,2,15,`Inyección de tinta`,`Multifunción`,`Si`);
/* console.log(impresora1.mostrarInfo()) ;
 */


function imprimirDocumento() { 
    document.getElementById("img1").src ="Impresora.gif";   
    console.log(`Imprimiendo el documento`);
     
}








