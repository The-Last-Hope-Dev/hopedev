import Layout from "@/components/layout";
import { useIntl } from "react-intl";

export default function Services() {
    const intl = useIntl();
    return (
        <Layout title={`HopeDev | ${intl.formatMessage({ id: 'page.route.home' })}`} description={intl.formatMessage({ id: "page.home.description" })}>
            {/*Section 1 */}
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <h1 className="text-4xl font-bold">Nuestros servicios</h1>
                        <span className="py-6 block">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</span>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
