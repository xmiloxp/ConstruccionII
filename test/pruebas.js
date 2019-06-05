process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const assert = require('chai').assert;
//const request = require('supertest');
const logic = require('../logic/documentLogic')
const servicio = require('../service/documentService')
// Prueba para verificar el tipo de documento de identidad, DNI (8 dígitos) Pasaporte (12 dígitos). (2pts)(PU)
// Prueba para sugerir el sexo del solicitante según el nombre del solicitante. (2pts) (PU)
// Prueba para verificar el cálculo de edad según la fecha de nacimiento. (2pts) (PU)
// Prueba para verificar el guardado correcto del documento en caso el solicitante sea mayor de edad. (2pts) (PI)
// Prueba para verificar el guardado correcto del documento en caso el solicitante sea menor de edad. (2pts) (PI)
// Prueba verificar el funcionamiento correcto del formulario web. (2pts) (PF)
describe('Prueba para verificar el tipo de documento de identidad, DNI (8 dígitos) Pasaporte (12 dígitos)', () => {
    const dni = '12345678'
    const pasaporte = "123456789101"
    const otro = "12345678"
  it('Retorna si es DNI, Pasaporte o Ninguno', () => {
    
    assert.equal(servicio.documentType(dni),'DNI',"valor ingresado incorrecto")
    assert.equal(servicio.documentType(pasaporte),'Pasaporte',"valor ingresado incorrecto")
    //assert.equal(servicio.documentType(otro),false,"valor ingresado incorrecto")
  });

  
})
describe('Prueba para sugerir el sexo del solicitante según el nombre del solicitante',() => {
  const nombre = "marco";
  
  // it('Retorna sexo M o F', () => {
  //   //assert.oneOf(servicio.sexo(nombre),['M','F'])
  //   assert.equal(servicio.sexo(nombre),'F')
  // })
})

describe('Prueba para verificar el cálculo de edad según la fecha de nacimiento', () => {
  const fecha = "06/11/1990"
  it('Retorna edad = 28', () => {
    assert.equal(servicio.edad(fecha),28,'fecha incorrecta')
  })
})

describe('Prueba para verificar el guardado correcto del documento deacuerdo a la edad', () => {
  const bodyMayor = {
    nombre:'Marco',
    apellidos:'Lopez',
    nroId: '12345678',
    fechaNacimiento: '06/11/1996',
    sexo: 'M',
    contacto: ''
  }
  const bodyMenor = {
    nombre:'Marco',
    apellidos:'Lopez',
    nroId: '12345678',
    fechaNacimiento: '06/11/2010',
    sexo: 'M',
    contacto: 'Mi mama'
  }
  it('Si es mayor de edad', () => {
    
    expect(logic.documento(bodyMayor)).to.have.property('reference_person','')
  })
  it('Si es menor de edad', () => {
    expect(logic.documento(bodyMenor)).to.not.have.property('reference_person','')
  })
})