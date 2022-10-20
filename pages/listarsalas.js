import Barra from "../components/barra.js";
import Lista from "../components/lista.js";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home(){
  return(
    <div onLoad={listarSalas}>
  <Barra/>
  <br/>
  <Lista/>
 </div>
)}