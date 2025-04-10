import { invoke } from '@forge/bridge';

console.log('--- main.js MÍNIMO CARGADO ---');

try {
  if (invoke) {
    console.log('¡ÉXITO MÍNIMO! La importación de invoke desde @forge/bridge funcionó.');
  } else {
    console.error('FALLO MÍNIMO: invoke es undefined después de la importación.');
  }
} catch (e) {
  console.error('ERROR CATCH MÍNIMO: Falló la importación o ejecución.', e);
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('--- DOMContentLoaded MÍNIMO DISPARADO ---');

  const guardarBtn = document.getElementById('guardarBtn');
  const codigoInput = document.getElementById('codigounicoarq');
  const resultadoDiv = document.getElementById('resultado');

  guardarBtn.addEventListener('click', async function() {
    const codigounicoarq = codigoInput.value.trim();
    
    if (!codigounicoarq) {
      resultadoDiv.innerHTML = '<p class="error">❌ Por favor, ingrese un código único</p>';
      return;
    }

    try {
      resultadoDiv.innerHTML = '<p class="loading">⏳ Guardando código...</p>';
      
      const response = await invoke('guardarCodigoHandler', {
        codigounicoarq
      });

      resultadoDiv.innerHTML = `<p class="success">${response.body}</p>`;
      codigoInput.value = ''; // Limpiar el input después de guardar
    } catch (error) {
      resultadoDiv.innerHTML = `<p class="error">❌ Error: ${error.message}</p>`;
    }
  });
}); 