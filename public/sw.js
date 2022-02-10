const CACHE_STATIC_NAME = "static-v4";
const CACHE_INMUTABLE_NAME = "inmutable-v1";
//En esta estrategia de fectch no se utiliza el caché dinámico
//const CACHE_DYNAMIC_NAME = "dynamic-v1";


self.addEventListener("install", (e) => {
  //abre el cache:
  const prmCacheStatic = caches.open(CACHE_STATIC_NAME).then((cache) => {
    //Agrega los recursos
    cache.addAll([
      "/",
      "/sw.js",
      "/index.html",
      "/assets/cav-1.png",
      "/assets/cav-2.png",
      "/favicon.ico",
      "/static/js/bundle.js",
      "/static/js/vendors~main.chunk.js",
      "/static/js/main.chunk.js",
      "/manifest.json",
      "logo192.png",
    ]);
  });

  //almacena recursos en cache inmutable (nunca va a cambiar el bostrap 5.0.2, solo se actualiza a la siguiente versión)
  const promCacheInmutable = caches
    .open(CACHE_INMUTABLE_NAME)
    .then((cache) =>
      cache.add(
        "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      )
    );

  // Como son dos promesas, se ejecutan a disitintas vlocidades
  //hay que crear un arreglo de promesas para agregarlar en el wait:
  e.waitUntil(Promise.all[(prmCacheStatic, promCacheInmutable)]);
  console.log("Recursos almacenados en cache");
});

/**
 * Evento que se produce después del install
 */
self.addEventListener("activate", (e) => {
  console.log("SW Activado");  

  const respBorrado = caches.keys().then( keys => {
    keys.forEach( key => {
      //Valida los key de los caché que no hay que eliminar
      //el estático y el dinámico versión actual
      if ( key !== CACHE_STATIC_NAME && key.includes('static') ) {
        console.log("Borrando caché", key);
        return caches.delete(key);
      }

    } )
  })

  e.waitUntil (respBorrado);

});

//Estrategia 4 <<Cache with network update>>
//cuando el rendimiento es crítico. Las actualizaciones están un "paso atrás"
self.addEventListener("fetch", (e) => {
    //Carga el bootstrap del inmutable (ya que solo busca del caché estático)
    if (e.request.url.includes("bootsrap")) {
        return e.respondWith(caches.match(e.request))
    }
  
    const respuesta = caches.open(CACHE_STATIC_NAME).then((cache) => {
    //hacel la solicitud al servidor en la web:
    
    fetch(e.request).then((newRes) => {
      //Cuando obtiene los recursos de la web actualiza el cache
      console.log("Url Recurso obtenido desde el servidor:", newRes.url);
      cache.put(e.request, newRes);
    });
    

    //Recupera los recursos del caché y los devuelve como peticiones del request del navegador
    return cache.match(e.request);
  });

  e.respondWith(respuesta);
});
