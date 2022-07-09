import React from "react";
import { Form, Button } from "react-bootstrap";

export default function RegistroDatos() {
  return (
    <Form className="registro">
      <h1 className="titulo">Registro</h1>
      <Form.Group className="mb-3 input" controlId="formBasicEmail">
        {/* <Form.Label>Nombre</Form.Label> */}
        <Form.Control type="text " placeholder="Ingrese su nombre" />
      </Form.Group>
      <Form.Group className="mb-3 input" controlId="formBasicPassword">
        {/* <Form.Label>Apellido</Form.Label> */}
        <Form.Control type="text" placeholder="Ingrese su apellido" />
      </Form.Group>
      <Form.Group className="mb-3 input" controlId="formBasicPassword">
        {/* <Form.Label>Correo</Form.Label> */}
        <Form.Control type="email" placeholder="Ingrese su correo" />
        <Form.Text className="text-muted">
          Nunca compartiremos su correo con nadie.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3 input" controlId="formBasicPassword">
        {/* <Form.Label>Teléfono</Form.Label> */}
        <Form.Control type="text" placeholder="Ingrese su teléfono" />
      </Form.Group>
      <Form.Group className="mb-3 input" controlId="formBasicPassword">
        {/* <Form.Label>Contraseña</Form.Label> */}
        <Form.Control type="password" placeholder="Ingrese su contraseña" />
      </Form.Group>

      <h2 className="titulo">Zonas</h2>
      <p>Selecciona una zona de preferencia</p>
      <Form.Group className="mb-3 input" controlId="formBasicCheckbox">
        <Form.Check type="radio" label="Super Vip" id="1" name="name" />
        <Form.Check type="radio" label="Vip" id="1" name="name" />
        <Form.Check type="radio" label="General" id="1" name="name" />
      </Form.Group>
      <textarea className="input2" />
      {/* <Form.Group className="mb-3 input">
        <Form.Control type="text" />
      </Form.Group> */}
      <Form.Group className="mb-3 input" controlId="formBasicCheckbox">
        <Form.Check
          type="radio"
          label="Acepto los términos y condiciones"
          id="2"
          name="name2"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
}
