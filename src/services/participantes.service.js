const BASE_URL = "http://localhost:5000/";

export const crearParticipante = async (data) => {
  const result = await fetch(BASE_URL + "participantes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  console.log(result.status);
  const respuesta = await result.json();
  return respuesta;
};
