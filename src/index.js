import api, { route } from "@forge/api";

export async function guardarCodigoHandler(req) {
  const { codigounicoarq } = req.body;

  try {
    const response = await api.asApp().requestJira(route`/rest/insight/1.0/object/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        objectTypeId: 5, // Tu ID de tipo de objeto
        attributes: [
          {
            objectTypeAttributeId: 77, // ID del atributo "codigounicoarq"
            objectAttributeValues: [
              { value: codigounicoarq }
            ]
          }
        ]
      }),
    });

    const data = await response.json();
    console.log("Objeto creado:", data);

    return {
      body: `✅ Código guardado en Assets: ${codigounicoarq}`
    };
  } catch (error) {
    console.error("Error al crear el objeto:", error);
    return {
      statusCode: 500,
      body: "❌ Error interno al guardar código"
    };
  }
}



