import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importa tu componente principal App
// No necesitas importar CssBaseline aquí si ya está en App.jsx dentro del ThemeProvider
// import './index.css'; // Si tienes un archivo CSS global básico (opcional)

// Busca el elemento raíz en tu public/index.html (usualmente un div con id="root")
const rootElement = document.getElementById('root');

if (rootElement) {
  // Crea un root de React para la renderización concurrente
  const root = ReactDOM.createRoot(rootElement);

  // Renderiza tu aplicación
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element. Ensure your public/index.html has an element with id='root'.");
}
