import { useState, useEffect } from "react";
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation";
import Layout from "@/components/layout";
import Link from "next/link";
import Alert from "@/components/alert";
import { EMAIL_REGEXP, PASSWORD_REGEXP, AlertTypes } from "@/utils/constants";

export default function Home() {

  const router = useRouter();
  const [responseType, setResponseType] = useState(null);
  const [formMessage, setFormMessage] = useState("");
  const [emailInputError, setEmailInputError] = useState("");
  const [passwordInputError, setPasswordInputError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  useEffect(() => {
    if (responseType !== null) {
      setTimeout(() => {
        setResponseType(null);
      }, 9000);
    }
  }, [responseType]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmitForm = (e) => {
    // We don't want the page to refresh
    e.preventDefault();
    handlePostForm(formData);
  }

  const handlePostForm = async (form) => {
    setEmailInputError("");
    setPasswordInputError("");
    console.log(form);

    if (!form.email) {
      setEmailInputError("Correo electrónico requerido");
      return;
    }

    if (!EMAIL_REGEXP.test(form.email)) {
      setEmailInputError("El email ingresado no es válido");
      return;
    }

    if (!form.password) {
      setPasswordInputError("Contraseña requerida");
      return;
    }

    if (!PASSWORD_REGEXP.test(form.password)) {
      setPasswordInputError(`Debe tener al menos 8 caracteres de longitud. Debe contener al menos una letra minúscula (a-z). Debe contener al menos una letra mayúscula (A-Z). Debe incluir al menos un número (0-9). Debe contener al menos un carácter especial, como !, @, #, $, etc. (no letras ni números).`);
      return;
    }
    const resNextAuth = await signIn('credentials', {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });

    if (resNextAuth?.error) {
      setFormMessage(resNextAuth.error);
      setResponseType(AlertTypes.ERROR);
    };
    if (resNextAuth?.ok) return router.push("/dashboard");

    console.log(resNextAuth);
  }

  return (
    <Layout title='HopeDev | Admin' description='HopeDev Admin Page'>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Inicia sesion!</h1>
            <p className="py-6">¡Ingresa a nuestro equipo de desarrolladores y sé parte del cambio!</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmitForm}>
              <div className="form-control">
                <label className="label" htmlFor="email">
                  <span className="label-text">Correo electronico</span>
                </label>
                <input id="email" name="email" type="email" placeholder="Tu correo electronico" className="input input-bordered" onChange={handleInput} value={formData.email} />
                {emailInputError != "" && (
                  <span className="label-text-alt text-error">{emailInputError}</span>
                )}
              </div>
              <div className="form-control">
                <label className="label" htmlFor="password">
                  <span className="label-text">Contraseña</span>
                </label>
                <input minLength={8} maxLength={30} id="password" name="password" type="password" placeholder="Tu contraseña" className="input input-bordered" onChange={handleInput} value={formData.password} />
                {passwordInputError != "" && (
                  <span className="label-text-alt text-error">{passwordInputError}</span>
                )}
                <label className="label">
                  <Link href="/register" className="label-text-alt link link-hover">
                    No tienes una cuenta?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Ingresa</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {responseType ? <Alert alertType={responseType} message={formMessage} /> : null}
    </Layout >
  )
}
