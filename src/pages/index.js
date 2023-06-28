import Layout from "@/components/layout"
import { FormattedMessage, useIntl } from "react-intl";
import indexStyles from "@/styles/index.module.css";
import Image from "next/image"
import Link from "next/link"
import BrandGrid from "@/components/brandGrid";


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
                <Image className="hidden md:block transform scale-x-[-1] ml-10" src="/imgs/smartmockup.png" alt="mockup" height={533} width={531} priority={true} />
                <div className="max-w-lg mr-10">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold ">
                    <FormattedMessage id="page.home.cta.title" />
                  </h1>
                  <p className="text-xl md:text-2xl  py-6">
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
            <h2 className="my-20 px-1 md:px-0 text-3xl md:text-4xl font-bold text-center">
            <FormattedMessage id="page.home.info.title" />
            </h2>
            <div className="flex justify-center items-center">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="flex flex-col justify-center items-center px-4 md:px-0 text-lg md:text-xl">
                  <p className="max-w-sm"><FormattedMessage id="page.home.info.description.one" /></p>
                  <br />
                  <p className="max-w-sm"><FormattedMessage id="page.home.info.description.two" /></p>
                  <br />
                  <p className="max-w-sm"><FormattedMessage id="page.home.info.description.three" /></p>
                </div>
                <div className="flex justify-center items-center">
                  <Image alt="computer with base" src="/imgs/computer-with-base.svg" width={500} height={500} />
                </div>
                <div className="flex justify-center items-center">
                  <div className="stats stats-vertical shadow bg-black">
                    <div className="stat">
                      <div className="stat-title text-lg md:text-xl"><FormattedMessage id="page.home.info.devs" /></div>
                      <div className="stat-value text-3xl md:text-4xl mb-2">4,200</div>
                      <div className="stat-desc text-base md:text-lg">↗︎ 400 (22%)</div>
                    </div>
                    <div className="stat">
                      <div className="stat-title text-lg md:text-xl"><FormattedMessage id="page.home.info.projects" /></div>
                      <div className="stat-value text-3xl md:text-4xl mb-2">1,200</div>
                      <div className="stat-desc text-base md:text-lg">↘︎ 90 (14%)</div>
                    </div>
                    <div className="stat">
                      <div className="stat-title text-lg md:text-xl"><FormattedMessage id="page.home.info.repositories" /></div>
                      <div className="stat-value text-3xl md:text-4xl mb-2">1,200</div>
                      <div className="stat-desc text-base md:text-lg">↘︎ 90 (14%)</div>
                    </div>
                    <div className="stat">
                      <div className="stat-title text-lg md:text-xl"><FormattedMessage id="page.home.info.tools" /></div>
                      <div className="stat-value text-3xl md:text-4xl mb-2">31K</div>
                      <div className="stat-desc text-base md:text-lg">Jan 1st - Feb 1st</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 md:mt-0 mx-6 md:mx-40 bg-neutral" style={{
          height: "1px",
        }} />
        {/*Section 3 */}
        <div className="min-h-screen flex justify-center items-center">
          <div className="flex flex-col md:flex-row max-w-6xl">
            <div className="avatar mr-10 justify-center items-center">
              <div className="w-36 h-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <Image src="/imgs/avatar-emmus.jpg" alt="Emmanuel avatar picture" width={250} height={250} />
              </div>
            </div>
            <div>
              <q className={`${indexStyles.quote} text-2xl pl-4 md:pl-0 mt-10 md:mt-0 md:text-3xl lg:text-4xl font-bold mb-4 block`}>
                <FormattedMessage id="page.home.quote" />
              </q>
              <span>
                <i className="text-lg md:text-xl  pl-4 md:pl-0">Emmanuel Monsalve Parra | CTO</i>
              </span>
            </div>
          </div>
        </div>
        <div className="mb-10 md:mb-0 mx-6 md:mx-40 bg-neutral" style={{
          height: "1px",
        }} />
        {/*Section 4 */}
        <div className="min-h-screen flex justify-center items-center">
          <div>
            <h2 className="my-20 px-1 md:px-0 text-3xl md:text-4xl font-bold text-center">
              <FormattedMessage id="page.home.section.title.services" />
            </h2>
            <div className="flex justify-center items-center">
              <div className="grid grid-cols-1 grid-rows-auto gap-x-20 gap-y-2 max-w-fit md:grid-cols-3 md:grid-rows-1">
                <div>
                  <div className="flex justify-center">
                    <Image src="/imgs/MF-SOFT.svg" width={250} height={250} alt="software image svg" />
                  </div>
                  <h3 className="text-xl md:text-2xl text-center font-bold mb-5"><FormattedMessage id="page.home.card.soft.title" /></h3>
                  <p className="px-4 md:px-0 text-lg md:text-xl text-center max-w-sm"><FormattedMessage id="page.home.card.soft.description" /></p>
                </div>
                <div className="mt-10 md:mt-0">
                  <div className="flex justify-center transform scale-x-[-1]">
                    <Image src="/imgs/MF-TI.svg" width={250} height={250} alt="IT image svg" />
                  </div>
                  <h3 className="text-xl md:text-2xl text-center font-bold mb-5"><FormattedMessage id="page.home.card.ti.title" /></h3>
                  <p className="px-4 md:px-0 text-lg md:text-xl text-center max-w-sm"><FormattedMessage id="page.home.card.ti.description" /></p>
                </div>
                <div className="mt-10 md:mt-0">
                  <div className="flex justify-center">
                    <Image src="/imgs/MF-SUPPORT.svg" width={250} height={250} alt="Maintenance and Support Services image svg" />
                  </div>
                  <h3 className="text-xl md:text-2xl text-center font-bold mb-5"><FormattedMessage id="page.home.card.support.title" /></h3>
                  <p className="px-4 md:px-0 text-lg md:text-xl text-center max-w-sm"><FormattedMessage id="page.home.card.support.description" /></p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mt-20 mb-20 md:mb-0">
              <Link href="/services" hrefLang="x-default">
                <button className="btn btn-primary mt-5">
                  <FormattedMessage id="page.route.readservices" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="mx-6 md:mx-40 bg-neutral" style={{
          height: "1px",
        }} />
        {/*Section 5 */}
        <div className="min-h-screen flex justify-center items-center">
          <div>
            <h2 className="my-20 px-1 md:px-0 text-3xl md:text-4xl font-bold text-center">
              <FormattedMessage id="page.home.section.title.stack" />
            </h2>
            <div className="mx-4 md:mx-0">
              <BrandGrid />
            </div>
          </div>
        </div>
        <div className="mt-20 md:mt-0 mx-6 md:mx-40 bg-neutral" style={{
          height: "1px",
        }} />
        {/*Section 6 */}
        <div className="hero min-h-screen">
          <div className="hero-content text-center">
            <div className="w-full">
              <h2 className="mb-5 text-3xl md:text-4xl font-bold">
              <FormattedMessage id="page.home.endCta.title" />
              </h2>
              <p className="mb-5 text-xl md:text-2xl">
              <FormattedMessage id="page.home.endCta.description" />
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
    </Layout >
  )
}
