self.addEventListener("install", e => {    
    console.log("Service worker Instalado");
} );

self.addEventListener("activate", e => {    
    console.log("SW Activado");
} );

self.addEventListener("fetch", e=>{
    console.log("Solicitud recurso", e.request.url);
})