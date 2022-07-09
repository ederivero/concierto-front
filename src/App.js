import RegistroDatos from "./components/RegistroDatos";
import "bootstrap/dist/css/bootstrap.min.css";
// import Pagina from "./components/Pagina";
// import Prueba from "./components/Prueba";

function App() {
  return (
    <div className="portada">
      <img
        src="https://pbs.twimg.com/media/FTEwsRjX0AAWi3Q?format=jpg&name=900x900"
        alt="concierto"
      />
      <RegistroDatos className="registro2" />

      {/* <Pagina /> */}
      {/* <Prueba></Prueba> */}
    </div>
  );
}

export default App;
