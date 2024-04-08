import React from "react"; // snippet imr
import ReactDOM from "react-dom/client";
import { CounterApp } from "./CounterApp";
import "./styles.css"


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp value={0} />
  </React.StrictMode>
);




//

//  <FirstApp title="Pedro" subTitle={1+2}/>

// defino props que pasan del componente padre al componente hijo 