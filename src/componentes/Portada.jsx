import React, { useState, useEffect } from "react";
import * as game from "../game";

export default function Portada() {
  const [activo, setActivo] = useState(false);

  const handleSwitch = () => {
    setActivo(!activo);
    console.log(game.generarNumero());
  };

  useEffect(() => {
    console.log("activo", activo);
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h1>PWA GESPRO</h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde odit
          corrupti ratione nihil laborum delectus ipsum placeat porro nobis nemo
          voluptatibus incidunt eaque in rem quis veritatis quam, amet labore.
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-12  text-center">
          <img
            src={activo ? "./assets/cav-1.png" : "./assets/cav-2.png"}
            alt="imagen cavernícula"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-grid">
          <button className="btn btn-turquese" onClick={handleSwitch}>
            {" "}
            {activo ? "APAGAR" : "ENCENDER"}
          </button>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-12 text-center bg-info">
          <h3>{activo && game.generarNumero()}</h3>
        </div>
      </div>
    </div>
  );
}
