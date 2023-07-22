import axios from "axios";
import { signIn } from "next-auth/react"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Alert from "@/components/alert";
import Layout from "@/components/layout";
import { EMAIL_REGEXP, PASSWORD_REGEXP, AlertTypes } from "@/utils/constants";

export default function Register() {

  const router = useRouter();
  const [responseType, setResponseType] = useState(null);
  const [formMessage, setFormMessage] = useState("");
  const [nameInputError, setNameInputError] = useState("");
  const [emailInputError, setEmailInputError] = useState("");
  const [passwordInputError, setPasswordInputError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
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
    setNameInputError("");
    setEmailInputError("");
    setPasswordInputError("");
    console.log(form);

    if (!form.name) {
      setNameInputError("Nombre completo requerido");
      return;
    }

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


    try {

      const res = await axios({
        method: 'POST',
        url: "/api/auth/signup",
        data: form
      });
      console.log(res);

      const resNextAuth = await signIn('credentials', {
        email: res.data.user.email,
        password: formData.password,
        redirect:  false,
      });

      if(resNextAuth?.ok) return router.push("/dashboard");
     
      console.log(resNextAuth);
      /*   const res = await fetch("/api/form", {
          method: "POST",
          headers,
          body: JSON.stringify(form)
        });
  
        if (!res.ok) {
          setFormMessage("La informacion no se envio");
          setResponseType(AlertTypes.ERROR);
          return;
        }
  
        setFormMessage("Te contactaremos pronto!");
        setResponseType(AlertTypes.SUCCESS); */
    } catch (e) {
      setFormMessage(e.response?.data?.message ? e.response?.data?.message : "Oops, Algo salio mal");
      setResponseType(AlertTypes.ERROR);
    }
  }

  return (
    <Layout title='HopeDev | Admin' description='HopeDev Admin Page'>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left ml-5">
            <h1 className="text-5xl font-bold">Registrate ya!</h1>
            <p className="py-6 max-w-2xl text-lg">¡Únete a nuestro equipo de desarrolladores y sé parte del cambio! Si eres un apasionado de la tecnología y te encanta enfrentar desafíos, esta es tu oportunidad. </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmitForm}>
              <div className="form-control">
                <label className="label" htmlFor="name">
                  <span className="label-text">Nombre</span>
                </label>
                <input minLength={6} maxLength={50} id="name" name="name" type="text" placeholder="Nombre completo" className="input input-bordered" onChange={handleInput} value={formData.name} />
                {nameInputError != "" && (
                  <span className="label-text-alt text-error">{nameInputError}</span>
                )}
              </div>
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
                  <Link href="/" className="label-text-alt link link-hover">
                    Ya tienes una cuenta?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Enviar</button>
              </div>
            </form>


          </div>
        </div>
      </div>
      {responseType ? <Alert alertType={responseType} message={formMessage} /> : null}
    </Layout >
  )
}

/* 
  return (
    <Layout title={`${intl.formatMessage({ id: 'page.route.contact' })} | HopeDev`} description={intl.formatMessage({ id: "page.home.description" })}>
      <div className="hero min-h-screen bg-base-200">
        <MapChart />
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold"> <FormattedMessage id="page.contact.title" /></h1>
            <p className="py-6 text-lg"> <FormattedMessage id="page.contact.title.secondary" /></p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmitForm}>
                <div className="form-control">
                  <label className="label" htmlFor="email">
                    <span className="label-text text-lg"><FormattedMessage id="page.contact.form.email" /></span>
                    {emailRequired && (<span className="label-text-alt text-error"><FormattedMessage id="page.contact.form.email.required" /></span>)}
                  </label>
                  <input id="email" autoComplete="off" name="email" type="text" placeholder={intl.formatMessage({ id: 'page.contact.form.email.placeholder' })} className={`text-base input input-bordered ${emailRequired ? "input-error" : ""}`} onChange={handleInput} value={formData.email} />
                </div>
                <div className="form-control">
                  <label className="label" htmlFor="comment">
                    <span className="label-text text-lg"><FormattedMessage id="page.contact.form.comment" /></span>
                    <span className="label-text-alt"><FormattedMessage id="page.contact.form.comment.optional" /></span>
                  </label>
                  <textarea
                    id="comment"
                    autoComplete="off"
                    maxLength="1000"
                    name="message"
                    className="text-base textarea textarea-bordered xs:h-40 md:h-28"
                    placeholder={intl.formatMessage({ id: 'page.contact.form.comment.placeholder' })}
                    onChange={handleInput}
                    value={formData.message}></textarea>
                </div>
                {recaptchaNeeded && (
                  <ReCAPTCHA
                    className="mt-3"
                    sitekey={recaptchakey}
                    onChange={onReCAPTCHAChange}
                  />
                )}
                <div className="form-control mt-5">
                  <button className="btn btn-primary"><FormattedMessage id="page.contact.form.submit" /></button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <FloatingWhatsApp
          avatar="/imgs/favicon-256.png"
          statusMessage="Pronto te responderemos..."
          chatMessage={wppMessage}
          placeholder="Escribe un mensaje..."
          darkMode={true}
          phoneNumber="+573177837117"
          accountName="HopeDev"
          allowEsc
          allowClickAway
          notification
          notificationSound
        />
      </div>
      {responseType ? <Alert alertType={responseType} message={formMessage} /> : null}
    </Layout>
  )
} */