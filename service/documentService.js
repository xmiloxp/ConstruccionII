const servicio = {}

servicio.documentType = ( id ) =>{
    if(id.length === 8){
        return 'DNI'
    }else{
        if(id.length === 12){
            return 'Pasaporte'
        }else{
            return false;
        }
    }
}
servicio.sexo = nombre => {
   return  (/a$/).test(nombre)? 'F':'M';
}
servicio.edad = fecha => {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
}
module.exports = servicio;