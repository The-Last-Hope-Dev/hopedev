import Layout from "@/components/layout";
import { FormattedMessage, useIntl } from "react-intl";
import Service from "@/components/service";

export default function Services() {
    const intl = useIntl();
    return (
        <Layout title={`HopeDev | ${intl.formatMessage({ id: 'page.route.home' })}`} description={intl.formatMessage({ id: "page.home.description" })}>

            {/*Section 1 */}
            <div className="min-h-screen ">
                <h2 className="mb-5 text-4xl font-bold text-center">
                    <FormattedMessage id="page.home.section.title.services" />
                </h2>
                <div className="w-screen pt-5">
                    <Service
                        isLeft={true}
                        key={intl.formatMessage({ id: "page.home.card.ti.title" })}
                        title={intl.formatMessage({ id: "page.home.card.ti.title" })}
                        description={intl.formatMessage({ id: "page.home.card.ti.description" })}
                        image="/imgs/MF-TI.svg"
                        badgeOne={intl.formatMessage({ id: "page.home.card.ti.category.one" })}
                        badgeTwo={intl.formatMessage({ id: "page.home.card.ti.category.two" })} />
                    <Service
                        isLeft={false}
                        key={intl.formatMessage({ id: "page.home.card.soft.title" })}
                        title={intl.formatMessage({ id: "page.home.card.soft.title" })}
                        description={intl.formatMessage({ id: "page.home.card.soft.description" })}
                        image="/imgs/MF-SOFT.svg"
                        badgeOne={intl.formatMessage({ id: "page.home.card.soft.category.one" })}
                        badgeTwo={intl.formatMessage({ id: "page.home.card.soft.category.two" })} />
                    <Service
                        isLeft={true}
                        key={intl.formatMessage({ id: "page.home.card.auto.title" })}
                        title={intl.formatMessage({ id: "page.home.card.auto.title" })}
                        description={intl.formatMessage({ id: "page.home.card.auto.description" })}
                        image="/imgs/MF-AUTO.svg"
                        badgeOne={intl.formatMessage({ id: "page.home.card.auto.category.one" })}
                        badgeTwo={intl.formatMessage({ id: "page.home.card.auto.category.two" })} />
                    <Service
                        isLeft={false}
                        key={intl.formatMessage({ id: "page.home.card.support.title" })}
                        title={intl.formatMessage({ id: "page.home.card.support.title" })}
                        description={intl.formatMessage({ id: "page.home.card.support.description" })}
                        image="/imgs/MF-SUPPORT.svg"
                        badgeOne={intl.formatMessage({ id: "page.home.card.support.category.one" })}
                        badgeTwo={intl.formatMessage({ id: "page.home.card.support.category.two" })} />
                </div>
            </div>
        </Layout>
    )
}
