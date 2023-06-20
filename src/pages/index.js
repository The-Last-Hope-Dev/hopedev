import Layout from "@/components/layout"
import { FormattedMessage, useIntl } from "react-intl";
import indexStyles from "@/styles/index.module.css";
import Image from "next/image"
import Link from "next/link"


export default function Home() {
  const intl = useIntl();

  return (
    <Layout title={`HopeDev | ${intl.formatMessage({ id: 'page.route.home' })}`} description={intl.formatMessage({ id: "page.home.description" })}>
      <div >
        {/*Section 1 */}
        <div className={indexStyles.wavesHeader}>
          <div className={indexStyles.innerWaves}>
            <div className="w-full h-full flex justify-center items-center">
              <div className="hero-content flex-col lg:flex-row-reverse md:flex-row">
                <Image className="transform scale-x-[-1] ml-10" src="/imgs/smartmockup.png" alt="mockup" height={550} width={550} priority={true} />
                <div className="max-w-lg mr-10">
                  <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold ">
                    <FormattedMessage id="page.home.cta.title" />
                  </h1>
                  <p className="text-2xl py-6">
                    <FormattedMessage id="page.home.cta.message" />
                  </p>
                  <Link href="/contact" hrefLang="x-default">
                    <button className="btn btn-primary mt-5">
                      <FormattedMessage id="page.home.ct" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <svg className={indexStyles.waves} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
              <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
              </defs>
              <g className={indexStyles.parallax}>
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
              </g>
            </svg>
          </div>
        </div>
        {/*Section 2 */}
        <div className="min-h-screen flex justify-center items-center">
          <div>
            <h2 className="my-20 text-4xl font-bold text-center">
              Desarrollo de software con propósito
            </h2>
            <div className="flex justify-center items-center">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="flex flex-col justify-center items-center text-xl">
                  <p className="max-w-sm">En HopeDev, somos apasionados del desarrollo de software y estamos comprometidos en impulsar el éxito de nuestros clientes en el mundo digital.</p>
                  <br />
                  <p className="max-w-sm">Nuestra experiencia y conocimiento en tecnología nos permiten crear soluciones a medida que impulsan la eficiencia y la productividad. </p>
                  <br />
                  <p className="max-w-sm"> Nos enfocamos en crear relaciones a largo plazo con nuestros clientes, trabajando juntos para alcanzar sus metas y objetivos de negocio. En HopeDev, no solo creamos software, creamos soluciones innovadoras que transforman los negocios y cambian el mundo.</p>
                </div>
                <div className="flex justify-center items-center">
                  <Image alt="computer with base" src="/imgs/computer-with-base.svg" width={500} height={500} />
                </div>
                <div className="flex justify-center items-center">
                  <div className="stats stats-vertical shadow bg-black">
                    <div className="stat">
                      <div className="stat-title text-xl">Desarrolladores</div>
                      <div className="stat-value text-4xl mb-2">4,200</div>
                      <div className="stat-desc text-lg">↗︎ 400 (22%)</div>
                    </div>
                    <div className="stat">
                      <div className="stat-title text-xl">Proyectos</div>
                      <div className="stat-value text-4xl mb-2">1,200</div>
                      <div className="stat-desc text-lg">↘︎ 90 (14%)</div>
                    </div>
                    <div className="stat">
                      <div className="stat-title text-xl">Repositorios</div>
                      <div className="stat-value text-4xl mb-2">1,200</div>
                      <div className="stat-desc text-lg">↘︎ 90 (14%)</div>
                    </div>
                    <div className="stat">
                      <div className="stat-title text-xl">Herramientas</div>
                      <div className="stat-value text-4xl mb-2">31K</div>
                      <div className="stat-desc text-lg">Jan 1st - Feb 1st</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Section 3 */}
        <div className="min-h-screen flex justify-center items-center">
          <div className="flex flex-row max-w-6xl">
            <div className="avatar mr-5 justify-center items-center">
              <div className="w-36 h-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
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
        {/*Section 4 */}
        <div className="min-h-screen flex justify-center items-center">
          <div>
            <h2 className="mb-20 text-4xl font-bold text-center">
              <FormattedMessage id="page.home.section.title.services" />
            </h2>
            <div className="flex justify-center items-center">
              <div className="grid grid-cols-1 grid-rows-auto gap-x-20 gap-y-2 max-w-fit md:grid-cols-3 md:grid-rows-1">
                <div>
                  <div className="flex justify-center">
                    <Image src="/imgs/MF-SOFT.svg" width={250} height={250} alt="software image svg"/>
                  </div>
                  <h3 className="text-2xl text-center font-bold mb-5">Custom Software Development</h3>
                  <p className="text-xl text-center max-w-sm">We develop custom software solutions to meet the specific needs of each client.</p>
                </div>
                <div>
                  <div className="flex justify-center transform scale-x-[-1]">
                    <Image src="/imgs/MF-TI.svg" width={250} height={250} alt="IT image svg"/>
                  </div>
                  <h3 className="text-2xl text-center font-bold mb-5">IT Consulting</h3>
                  <p className="text-xl text-center max-w-sm">We offer consulting services to help companies make informed decisions about information technology.</p>
                </div>
                <div>
                  <div className="flex justify-center">
                    <Image src="/imgs/MF-SUPPORT.svg" width={250} height={250} alt="Maintenance and Support Services image svg"/>
                  </div>
                  <h3 className="text-2xl text-center font-bold mb-5">Maintenance and Support Services</h3>
                  <p className="text-xl text-center max-w-sm">We offer maintenance and support services to ensure our client&apos;s systems run smoothly.</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mt-20">
            <Link href="/services" hrefLang="x-default">
                <button className="btn btn-primary mt-5">
                  <FormattedMessage id="page.route.readservices" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout >
  )
}
