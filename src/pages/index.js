import Layout from "@/components/layout"
import { FormattedMessage } from "react-intl";

const title = "Hope Dev"
const description = "Landing page HopeDev"

export default function Home() {
  return (
    <Layout title={title} description={description}>
      <div className="hero min-h-screen" style={{ backgroundImage: `url("/imgs/hero-bg.jpg")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hope Dev</h1>
            <p className="mb-5 text-xl">
              <FormattedMessage id="page.home.title" />
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
