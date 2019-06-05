const servicio = require('../service/documentService')
const logic = {}

logic.documento = (body) => {
    const doc = {
        applicant_person: body.nombre + ' '+ body.apellidos,
        identification_type: servicio.documentType(body.nroId),
        identification_number: body.nroId,
        reference_person: servicio.edad(body.fechaNacimiento) >= 18? '':body.contacto,
        sex: body.sexo != '' ? body.sexo:servicio.sexo(body.nombre),
        age: servicio.edad(body.fechaNacimiento)
    }
    return doc;
}
module.exports = logic;