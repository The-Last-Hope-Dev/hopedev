import Layout from "@/components/layout"
import { FormattedMessage } from "react-intl";
import indexStyles from "@/styles/index.module.css";

const title = "Hope Dev"
const description = "Landing page HopeDev"

export default function Home() {
  return (
    <Layout title={title} description={description}>
      <>
        {/*Section 1 */}
        <div className="hero min-h-screen" style={{ backgroundImage: `url("/imgs/hero-bg.jpg")` }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-6xl font-bold">Hope Dev</h1>
              <p className="mb-5 text-xl">
                <FormattedMessage id="page.home.title" />
              </p>
              <button className="btn btn-primary">
                <FormattedMessage id="page.home.ct" />
              </button>
            </div>
          </div>
        </div>
        {/*Section 2 */}
        <div className="min-h-screen max-h-fit">
          <div className="w-screen text-center pt-5">
            <h2 className="mb-5 text-4xl font-bold p-5 text-neutral-content">Desarrollo de software de calidad</h2>
          </div>
          <div className="flex flex-col w-full lg:flex-row">
            <div className={`grid flex-grow card bg-base-300 rounded-box place-items-center m-8 card-body glass overflow-wrap-normal whitespace-normal ${indexStyles.standard}`} style={{ width: '50vw' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
              </svg>
              <span className="text-neutral-content font-bold text-3xl text-center">Estándares de codificación</span>
              <p className="text-neutral-content text-xl text-center mx-4 mb-10">
                Mantenemos altos estándares de codificación para garantizar que nuestros proyectos sean claros y coherentes. Esto incluye nomenclatura, indentación y comentarios, lo que nos ayuda a desarrollar un código limpio y fácilmente mantenible.
              </p>
            </div>
            <div className="divider lg:divider-horizontal">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
            </div>
            <div className={`grid flex-grow card bg-base-300 rounded-box place-items-center m-8 card-body glass overflow-wrap-normal whitespace-normal ${indexStyles.standard}`} style={{ width: '50vw' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <span className="text-neutral-content font-bold text-2xl text-center">Pruebas unitarias</span>
              <p className="text-neutral-content text-xl text-center mx-4 mb-10">
                Nuestro proceso de desarrollo incluye pruebas unitarias, lo que significa que comprobamos regularmente que nuestro código funciona como se espera. Esto nos ayuda a detectar errores antes de que se vuelvan críticos y asegurarnos de que nuestro código sea robusto.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full lg:flex-row">
            <div className={`grid flex-grow card bg-base-300 rounded-box place-items-center m-8 card-body glass overflow-wrap-normal whitespace-normal ${indexStyles.standard}`} style={{ width: '50vw' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <span className="text-neutral-content font-bold text-3xl text-center">Revisiones de código</span>
              <p className="text-neutral-content text-xl text-center mx-4 mb-10">
                Revisamos nuestro código en equipo para detectar errores y oportunidades de mejora. De esta manera, nos aseguramos de que nuestro código sea lo más sólido posible y de que aprendamos y crezcamos juntos como equipo.
              </p>
            </div>
            <div className="divider lg:divider-horizontal">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>

            </div>
            <div className={`grid flex-grow card bg-base-300 rounded-box place-items-center m-8 card-body glass overflow-wrap-normal whitespace-normal ${indexStyles.standard}`} style={{ width: '50vw' }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
</svg>

              <span className="text-neutral-content font-bold text-2xl text-center">Automatización</span>
              <p className="text-neutral-content text-xl text-center mx-4 mb-10">
                Automatizamos el proceso de compilación, empaquetado y pruebas para ahorrar tiempo y reducir el riesgo de errores humanos. Esto nos permite centrarnos en tareas de mayor valor y asegurarnos de que nuestro código esté en buenas condiciones.
              </p>
            </div>
          </div>
        </div>
      </>
    </Layout>
  )
}
