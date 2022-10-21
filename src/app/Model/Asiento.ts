export class Asiento{

    idAsiento!: number;
    idAvion!: number;//obtenerlo de la clase de avion, aca hay que pasar el valor de la variable de un html a otro, 
    idPersona!:number;
    nombre!: String;//obtener de metodo que genera el id
    codigo!: String;//obtener de metodo que genera el id
    fila!: String; //obtener de matriz, que se forma cuando el cliente selececciona
    columna!: String;//obtener de matriz, que se forma cuando el cliente selececciona
    precio!: number;//no mostrarlo, manterlo interno hasta nuevo aviso
    usuarioCreacion!: String;//quearlo
    fechaCreacion!:Date;//buscar como mandar la fecha del sistema, 
    usuarioModificacion!: String;//vacio
    fechaModificacion! : Date;//vacio
    idclase!: String;//vacio
    idestadoregistroTabla!: number;//quemas valor 8

    Asiento(){}
}