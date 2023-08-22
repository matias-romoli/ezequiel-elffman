import Subtitle from "../../../components/subtitle";
import { dataUser } from "../../../API/api";
import { useState } from "react";
import Body from "./body";
interface User {
  apellido: String;
  nombre: String;
  email: String;
  plan: any;
}

function Form() {
  const [value, setValue] = useState("default");
  const [loading, setLoading] = useState(false);
  const [saveDB, setSaveDB] = useState(false);
  const [user, setUser] = useState<User>({
    apellido: "",
    nombre: "",
    email: "",
    plan: "",
  });
  const [plan, setPlan] = useState(false);
  const [err, setErr] = useState("");

  const handleOnChange = (event: any) => {
    const { name, value }: any = event.target;
    setUser({
      ...user,
      [name]: value,
    });
    setValue(event.target.value);
  };
  async function handleForm(event: any) {
    const { nombre, apellido, email, plan } = user;
    const data = { nombre, apellido, email, plan };
    event.preventDefault();
    try {
      const response: any = await dataUser(data);

      if ((await response.status) === 200) {
        setLoading(true);
        setTimeout(async () => {
          setErr("Datos enviados correctamente.");
          setLoading(false);
          setSaveDB(true);
          setUser({
            apellido: "",
            nombre: "",
            email: "",
            plan: "",
          });
        }, 2000);

        if (plan === "Personalizado" || plan === "Personalizado-deportistas") {
          setPlan(true);
        }
      }
      if ((await response.status) === 500) {
        const responseJSON = await response.json();
        setLoading(true);
        setTimeout(async () => {
          setErr(responseJSON.errors[0].msg);
          setLoading(false);
        }, 2000);
      }
    } catch (error) {
      return error;
    }
  }

  return (
    <>
      <Subtitle
        paragraph="FORMULARIO DE CONTACTO"
        name="main-subtitle__form"
        id="form"
      />
      <div className="main-form-container">
        <Body
          onChange={handleOnChange}
          onSubmit={handleForm}
          loading={loading}
          value={value}
          db={saveDB}
          user={user}
          plan={plan}
          err={err}
        />
      </div>
    </>
  );
}

export default Form;
