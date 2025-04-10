import ForgeUI, {
  render,
  Fragment,
  Text,
  Button,
  TextField,
  Form,
  useState,
} from "@forge/ui";

// Componente principal de la interfaz de usuario
const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [codigo, setCodigo] = useState(null);

  return (
    <Fragment>
      {!showForm && (
        <Button text="Ingresar Código Único" onClick={() => setShowForm(true)} />
      )}

      {showForm && (
        <Form
          onSubmit={async (formData) => {
            setCodigo(formData.codigounicoarq);
            // Aquí irá la conexión al backend Forge para guardar en Assets
            // await api.asApp().requestJira(route, options)
          }}
        >
          <TextField name="codigounicoarq" label="Ingrese el Código Único" />
        </Form>
      )}

      {codigo && (
        <Text>✅ Código guardado: {codigo}</Text>
      )}
    </Fragment>
  );
};

// Esta función es requerida por manifest.yml para poder vincularla como handler
export async function handler(req) {
  console.log("Handler is running with request:", req);
  return {
    body: `Hola desde Forge!`,
  };
}

// Este es el punto de entrada para la parte visual (UI)
export const run = render(<App />);