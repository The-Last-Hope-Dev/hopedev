import Layout from "@/components/layout"
import { FormattedMessage, useIntl } from "react-intl";
import indexStyles from "@/styles/index.module.css";
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const intl = useIntl();

  return (
    <Layout title={`HopeDev | ${intl.formatMessage({ id: 'page.route.home' })}`} description={intl.formatMessage({ id: "page.home.description" })}>
      <>
        {/*Section 1 */}
        <div className="hero min-h-screen" style={{ backgroundImage: `url("/imgs/hero-bg.jpg")` }}>
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
          <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
              <div className="avatar mr-5">
                <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <Image src="/imgs/avatar-emmus.jpg" alt="Emmanuel avatar picture" width={250} height={250} />
                </div>
              </div>
              <div>
                <h1 className={`${indexStyles.quote} text-4xl font-bold mb-4 `}>
                  <q>
                    <FormattedMessage id="page.home.quote" />
                  </q>
                </h1>
                <span>
                  <i className="text-xl ">Emmanuel Monsalve Parra | CTO</i>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/*Section 3 */}
        <div className="min-h-screen">
          <div className="w-screen text-center pt-5">
            <h2 className="mb-5 text-4xl font-bold p-5 ">
              <FormattedMessage id="page.home.section.title.services" />
            </h2>
          </div>
        </div>
        {/*Section 4 */}
        <div className="min-h-screen max-h-fit">
          <div className="w-screen text-center pt-5">
            <h2 className="mb-5 text-4xl font-bold p-5 ">
              <FormattedMessage id="page.home.section.title.quality" />
            </h2>
          </div>
          <div className="flex flex-col w-full lg:flex-row">
            <div className={`grid flex-grow card bg-base-300 rounded-box place-items-center m-8 card-body glass overflow-wrap-normal whitespace-normal ${indexStyles.standard}`} style={{ width: '50vw' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
              </svg>
              <span className=" font-bold text-2xl text-center">
                <FormattedMessage id="page.home.section.item.standard.title" />
              </span>
              <p className=" text-xl text-center mx-4 mb-10">
                <FormattedMessage id="page.home.section.item.standard.description" />
              </p>
            </div>
            <div className="divider lg:divider-horizontal">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
            </div>
            <div className={`grid flex-grow card bg-base-300 rounded-box place-items-center m-8 card-body glass overflow-wrap-normal whitespace-normal ${indexStyles.standard}`} style={{ width: '50vw' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <span className=" font-bold text-2xl text-center">
                <FormattedMessage id="page.home.section.item.test.title" />
              </span>
              <p className=" text-xl text-center mx-4 mb-10">
                <FormattedMessage id="page.home.section.item.test.description" />
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full lg:flex-row">
            <div className={`grid flex-grow card bg-base-300 rounded-box place-items-center m-8 card-body glass overflow-wrap-normal whitespace-normal ${indexStyles.standard}`} style={{ width: '50vw' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <span className=" font-bold text-2xl text-center">
                <FormattedMessage id="page.home.section.item.code.title" />
              </span>
              <p className=" text-xl text-center mx-4 mb-10">
                <FormattedMessage id="page.home.section.item.code.description" />
              </p>
            </div>
            <div className="divider lg:divider-horizontal">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>

            </div>
            <div className={`grid flex-grow card bg-base-300 rounded-box place-items-center m-8 card-body glass overflow-wrap-normal whitespace-normal ${indexStyles.standard}`} style={{ width: '50vw' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>

              <span className=" font-bold text-2xl text-center">
                <FormattedMessage id="page.home.section.item.automatization.title" />
              </span>
              <p className=" text-xl text-center mx-4 mb-10">
                <FormattedMessage id="page.home.section.item.automatization.description" />
              </p>
            </div>
          </div>
        </div>
        {/*Section 5 */}
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse md:flex-row-reverse">
            <div className="xs:hidden md:flex md:flex-row items-center lg:ml-48 md:ml-20 md:relative">
              <div className="mockup-window border-4 border-primary bg-base-300 h-56 w-96 md:absolute md:right-9 lg:right-1/3">
                <div className="flex justify-center bg-base-200">
                  <Image src="/imgs/mockup.jpg" alt="website mockup image" width={600} height={600} />
                </div>
              </div>
              <div className={`${indexStyles.mockups} mockup-phone border-primary`}>
                <div className="camera"></div>
                <div className="display">
                  <div className="artboard artboard-demo phone-1" style={{ width: '306px', height: '600px' }}>
                    <Image src="/imgs/supreme.png" alt="website mockup image" width={306} height={600} />
                  </div>
                </div>
              </div>
            </div>
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
