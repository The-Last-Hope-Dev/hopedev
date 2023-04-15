import { useState, useEffect } from "react";
import Layout from "@/components/layout";
import MapChart from "@/components/map";
import dbConnect from "@/lib/dbConnect";
import Movie from "@/models/Movie.js"

const title = "Contact | HopeDev"
const description = "Contact page HopeDev"

export default function Contact({ tests }) {

    const [formData, setFormData] = useState({
        email: "",
        message: ""
    });
    const [formSuccess, setFormSuccess] = useState(false)

    const handleInput = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setFormData((prevState) => ({
            ...prevState,
            [fieldName]: fieldValue
        }));
    }

    const submitForm = (e) => {
        // We don't want the page to refresh
        e.preventDefault()

        const formURL = e.target.action
        const data = new FormData()

        // Turn our formData state into data we can use with a form submission
        Object.entries(formData).forEach(([key, value]) => {
            data.append(key, value);
        });

        /*   // POST the data to the URL of the form
          fetch(formURL, {
              method: "POST",
              body: data,
              headers: {
                  'accept': 'application/json',
              },
          }).then(() => {
              setFormData({
                  name: "",
                  email: "",
                  message: ""
              })
              setFormSuccess(true)
          }) */
    }

    useEffect(() => {
        console.log(tests)
    }, [tests]);

    return (
        <Layout title={title} description={description}>
            <div className="hero min-h-screen bg-base-200">
                <MapChart />
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">¡Hablemos de tus necesidades!</h1>
                        <p className="py-6">Contáctanos y descubre cómo podemos ayudarte a alcanzar tus metas.</p>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form action="/send-data-here" method="post" onSubmit={submitForm}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name="email" type="text" placeholder="email" className="input input-bordered" onChange={handleInput} value={formData.email} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Comentario</span>
                                        <span className="label-text-alt">Opcional</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        className="textarea textarea-bordered h-24"
                                        placeholder="Dejanos un comentario, pronto te responderemos."
                                        onChange={handleInput}
                                        value={formData.message}></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps() {
    try {
        await dbConnect();
        const result = await Movie.find({});
        const tests = result.map((doc) => {
            const test = doc.toObject();
            test._id = test._id.toString();
            return test;
        });

        return { props: { tests } };
    } catch (error) {
        console.log(error);
        return { props: {} };
    }
}