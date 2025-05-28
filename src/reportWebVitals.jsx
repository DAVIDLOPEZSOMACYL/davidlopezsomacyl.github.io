// Esta función se utiliza para enviar las métricas de rendimiento a un endpoint de análisis
// o simplemente para registrarlas en la consola.
const reportWebVitals = onPerfEntry => {
  // Verifica si onPerfEntry es una función antes de llamarla.
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Importa dinámicamente el módulo 'web-vitals'.
    // Esto permite que el código de 'web-vitals' solo se cargue si se necesita.
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Llama a cada una de las funciones de 'web-vitals' para obtener las métricas.
      // Cada función toma 'onPerfEntry' como callback para pasar la métrica obtenida.

      // Cumulative Layout Shift (CLS) - Mide la estabilidad visual.
      getCLS(onPerfEntry);

      // First Input Delay (FID) - Mide la interactividad (tiempo de respuesta al primer input).
      getFID(onPerfEntry);

      // First Contentful Paint (FCP) - Mide cuándo se renderiza el primer contenido.
      getFCP(onPerfEntry);

      // Largest Contentful Paint (LCP) - Mide cuándo se renderiza el elemento más grande.
      getLCP(onPerfEntry);

      // Time to First Byte (TTFB) - Mide el tiempo de respuesta del servidor.
      getTTFB(onPerfEntry);
    }).catch(error => {
      // Maneja cualquier error que pueda ocurrir durante la importación dinámica.
      console.error("Error importing web-vitals:", error);
    });
  }
};

export default reportWebVitals;
