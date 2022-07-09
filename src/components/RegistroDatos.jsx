import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { crearParticipante } from "../services/participantes.service";

export default function RegistroDatos() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    telefono: 0,
    password: "",
    zona: "GENERAL",
    comentario: "",
  });

  const enviarData =async (e)=>{
    e.preventDefault()
    const mensaje = await crearParticipante(formulario)
    console.log(mensaje)
    alert(mensaje)
  }
  return (
    <Form className="registro">
      <input onChange={(e)=>{console.log(e.target.id)}}/>
      <h1 className="titulo">Registro</h1>
      <Form.Group className="mb-3 input" >
        {/* <Form.Label>Nombre</Form.Label> */}
        <Form.Control type="text" placeholder="Ingrese su nombre" id="nombre" value={formulario.nombre} onChange={(e)=>{setFormulario((prev)=>({...prev, nombre: e.target.value}))}}/>
      </Form.Group>
      <Form.Group className="mb-3 input" >
        {/* <Form.Label>Apellido</Form.Label> */}
        <Form.Control
          type="text"
          placeholder="Ingrese su apellido"
          value={formulario.apellido}
          id="apellido"
          onChange={(e)=>{setFormulario((prev)=>({...prev, apellido: e.target.value}))}}
        />
      </Form.Group>
      <Form.Group className="mb-3 input" >
        {/* <Form.Label>Correo</Form.Label> */}
        <Form.Control type="text" placeholder="Ingrese su correo" id="correo" value={formulario.correo} onChange={(e)=>{setFormulario((prev)=>({...prev, correo: e.target.value}))}}/>
        <Form.Text className="text-muted">
          Nunca compartiremos su correo con nadie.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3 input" >
        {/* <Form.Label>Teléfono</Form.Label> */}
        <Form.Control type="number" placeholder="Ingrese su teléfono" id="telefono"
        onChange={(e)=>{setFormulario((prev)=>({...prev, telefono: e.target.value}))}} />
      </Form.Group>
      <Form.Group
        className="mb-3 input"
        value={formulario.telefono}
        
      >
        {/* <Form.Label>Contraseña</Form.Label> */}
        <Form.Control
          type="password"
          placeholder="Ingrese su contraseña"
          id="password"
          value={formulario.password}
          onChange={(e)=>{setFormulario((prev)=>({...prev, password: e.target.value}))}}
        />
      </Form.Group>

      <h2 className="titulo">Zonas</h2>
      <p>Selecciona una zona de preferencia</p>
      <Form.Group
        className="mb-3 input"
        
        id="zona"
        onChange={(e)=>{setFormulario((prev)=>({...prev, zona: e.target.checked}))}}
      >
        <Form.Check type="radio" label="Super Vip" id="1" name="name" value="SUPER_VIP" />
        <Form.Check type="radio" label="Vip" id="1" name="name"  value="VIP"/>
        <Form.Check type="radio" label="General" id="1" name="name" value="GENERAL"/>
      </Form.Group>
      <textarea className="input2" id="comentario" onChange={(e)=>{setFormulario((prev)=>({...prev, comentario: e.target.value}))}}/>
      {/* <Form.Group className="mb-3 input">
        <Form.Control type="text" />
      </Form.Group> */}
      <Form.Group className="mb-3 input" >
        <Form.Check
          type="checkbox"
          label="Acepto los términos y condiciones"
          id="2"
          name="name2"
        />
      </Form.Group>

      <Button variant="primary" type="button" onClick={enviarData}>
        Enviar
      </Button>
    </Form>
  );
}
