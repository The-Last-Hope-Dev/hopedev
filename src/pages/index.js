import Layout from "@/components/layout"
import { FormattedMessage, useIntl } from "react-intl";
import indexStyles from "@/styles/index.module.css";
import Image from "next/image"
import Link from "next/link"
import Service from "@/components/service";

export default function Home() {
  const intl = useIntl();

  return (
    <Layout title={`HopeDev | ${intl.formatMessage({ id: 'page.route.home' })}`} description={intl.formatMessage({ id: "page.home.description" })}>
      <>
        {/*Section 1 */}
        <div className="hero min-h-screen" style={{ backgroundImage: `url("/imgs/hero-bg.jpg")`, width: "auto", height: "auto" }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center ">
            <div className="max-w-md">
              <h1 className="mb-5 text-6xl font-bold">HopeDev</h1>
              <p className="mb-5 text-xl">
                <FormattedMessage id="page.home.title" />
              </p>
              <Link href="/contact" hrefLang="x-default">
                <button className="btn btn-primary">
                  <FormattedMessage id="page.home.ct" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/*Section 2 */}
        <div className="min-h-screen">
          <h2 className="mt-20 text-4xl font-bold text-center">
            Desarrollo de software con propósito
          </h2>
          <div className="grid grid-cols-3 h-screen">
            <div className="bg-gray-500 flex justify-center items-center">
              <p className="text-xl max-w-sm">En HopeDev, somos apasionados del desarrollo de software y estamos comprometidos en impulsar el éxito de nuestros clientes en el mundo digital. Nuestra experiencia y conocimiento en tecnología nos permiten crear soluciones a medida que impulsan la eficiencia y la productividad. Nos enfocamos en crear relaciones a largo plazo con nuestros clientes, trabajando juntos para alcanzar sus metas y objetivos de negocio. En HopeDev, no solo creamos software, creamos soluciones innovadoras que transforman los negocios y cambian el mundo.</p>
            </div>
            <div className="bg-gray-400">Columna 2</div>
            <div className="bg-gray-300 flex justify-center items-center">
              <div className="stats stats-vertical shadow ">
                <div className="stat">
                  <div className="stat-title">Downloads</div>
                  <div className="stat-value">31K</div>
                  <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                  <div className="stat-title">New Users</div>
                  <div className="stat-value">4,200</div>
                  <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                  <div className="stat-title">New Registers</div>
                  <div className="stat-value">1,200</div>
                  <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
                <div className="stat">
                  <div className="stat-title">New Registers</div>
                  <div className="stat-value">1,200</div>
                  <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Section 3 */}
        <div className="min-h-screen">
          <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
              <div className="avatar mr-5">
                <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <Image src="/imgs/avatar-emmus.jpg" alt="Emmanuel avatar picture" width={250} height={250} />
                </div>
              </div>
              <div>
                <q className={`${indexStyles.quote} text-4xl font-bold mb-4 block`}>
                  <FormattedMessage id="page.home.quote" />
                </q>
                <span>
                  <i className="text-xl ">Emmanuel Monsalve Parra | CTO</i>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/*Section 4 */}
        <div className="min-h-screen">
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
        {/*Section 5 */}
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse md:flex-row">
            <Image className="transform scale-x-[-1] ml-10" src="/imgs/smartmockup.png" alt="mockup" height={550} width={550} />
            <div className="max-w-md">
              <h1 className="text-4xl md:text-4xl lg:text-4xl font-bold ">
                <FormattedMessage id="page.home.cta.title" />
              </h1>
              <p className="text-xl py-6">
                <FormattedMessage id="page.home.cta.message" />
              </p>
              <Link href="/contact" hrefLang="x-default">
                <button className="btn btn-primary">
                  <FormattedMessage id="page.home.ct" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>
    </Layout>
  )
}
