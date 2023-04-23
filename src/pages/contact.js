import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Layout from "@/components/layout";
import MapChart from "@/components/map";
import Alert from "@/components/alert";
import { useIntl, FormattedMessage } from "react-intl";
import { headers } from "@/utils/constants";
import { AlertTypes, EMAIL_RGX } from "@/utils/constants";

const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"));
const recaptchakey = process.env.NEXT_PUBLIC_CAPTCHA_CLIENT;

export default function Contact() {
    const intl = useIntl();

    const [formData, setFormData] = useState({
        email: "",
        message: "",
        captcha: ""
    });
    const [responseType, setResponseType] = useState(null);
    const [formMessage, setFormMessage] = useState("");
    const [emailRequired, setEmailRequired] = useState(false);
    const [recaptchaNeeded, setRecaptchaNeeded] = useState(false);

    const onReCAPTCHAChange = async (captchaCode) => {
        if (!captchaCode) {
            return;
        }
        setFormData({
            ...formData,
            captcha: captchaCode
        })
    }

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({
            ...formData,
            [name]: value
        });
        setRecaptchaNeeded(true);
    }

    const handleSubmitForm = (e) => {
        // We don't want the page to refresh
        e.preventDefault();
        handlePostForm(formData);
    }

    useEffect(() => {
        if (responseType !== null) {
            setTimeout(() => {
                setResponseType(null);
                setEmailRequired(false);
            }, 4000);
        }
    }, [responseType]);

    const handlePostForm = async (form) => {
        if (!form.email) {
            setFormMessage("Por favor ingrese un correo electronico");
            setResponseType(AlertTypes.ERROR);
            setEmailRequired(true);
            return;
        }
        if (!EMAIL_RGX.test(form.email)) {
            setFormMessage("El email ingresado no es válido");
            setResponseType(AlertTypes.ERROR);
            return;
        }

        try {
            const res = await fetch("/api/form", {
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
            setResponseType(AlertTypes.SUCCESS);
        } catch (e) {
            setFormMessage("Oops, Algo salio mal");
            setResponseType(AlertTypes.WARNING);
        }
    }
  /*   intl.formatMessage({ id: "page.home.description" }) */

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
                                    <label className="label" for="email">
                                        <span className="label-text text-lg"><FormattedMessage id="page.contact.form.email" /></span>
                                        {emailRequired && (<span className="label-text-alt text-error"><FormattedMessage id="page.contact.form.email.required" /></span>)}
                                    </label>
                                    <input id="email" autoComplete="off" name="email" type="text" placeholder={intl.formatMessage({ id: 'page.contact.form.email.placeholder' })} className={`text-base input input-bordered ${emailRequired ? "input-error" : ""}`} onChange={handleInput} value={formData.email} />
                                </div>
                                <div className="form-control">
                                    <label className="label" for="comment">
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
            </div>
            {responseType ? <Alert alertType={responseType} message={formMessage} /> : null}
        </Layout>
    )
}