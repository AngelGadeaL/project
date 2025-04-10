import api, { route } from "@forge/api";
import ForgeUI, { render, Fragment, Text, Button, TextField } from "@forge/ui";
import Resolver from "@forge/resolver";

const resolver = new Resolver();

resolver.define("guardar-codigo-handler", async (req) => {
  const { codigounicoarq } = req;

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

    const data = await response.json();
    console.log("✅ Objeto creado:", data);
    return `✅ Código guardado en Assets: ${codigounicoarq}`;
  } catch (error) {
    console.error("❌ Error:", error);
    throw new Error(`Error al guardar código: ${error.message}`);
  }
});

// Esta función es necesaria para la configuración del resolver en el manifest
export async function guardarCodigoHandler(req) {
  return resolver.resolve(req);
}

  