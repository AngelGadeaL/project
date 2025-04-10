import api, { route } from "@forge/api";
import { invokeResolver } from "@forge/resolver";

export async function guardarCodigoHandler(req) {
  const { codigounicoarq } = req.body;

  if (!codigounicoarq) {
    return {
      statusCode: 400,
      body: "❌ Error: El código único es requerido",
    };
  }

  try {
    const response = await api.asApp().requestJira(route`/rest/insight/1.0/object/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        objectTypeId: 5,
        attributes: [
          {
            objectTypeAttributeId: 77,
            objectAttributeValues: [
              { value: codigounicoarq },
            ],
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`Error del servidor: ${response.status}`);
    }

    const data = await response.json();
    console.log("✅ Objeto creado:", data);
    return {
      body: `✅ Código guardado en Assets: ${codigounicoarq}`,
    };
  } catch (error) {
    console.error("❌ Error:", error);
    return {
      statusCode: 500,
      body: `❌ Error: ${error.message}`,
    };
  }
}

// Configuración del resolver
invokeResolver({
  guardarCodigoHandler,
});


