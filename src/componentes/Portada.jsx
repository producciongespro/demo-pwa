import React, { useState, useEffect } from "react";


export default function Portada() {

    const [activo, setActivo] = useState(false);
    
    const handleSwitch =()=> {
        setActivo(!activo);
    }

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
          src={
              activo ? "./assets/cav-2.png" : "./assets/cav-1.png"
          } 
          alt="imagen cavernícula" />
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-grid">
          <button 
            className="btn btn-turquese"
            onClick={handleSwitch}
            > {
                activo ? "ENCENDER" : "APAGAR"
            } 
            </button>
        </div>
      </div>
    </div>
  );
}
