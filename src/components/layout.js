import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Footer from './footer'

export default function Layout({ children, title, description }) {

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            <div>
                <header className="w-full navbar bg-base-300 text-base text-primary-content">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2">
                        <Link href="/" hrefLang="x-default" className="w-fit block">
                            <Image src="/imgs/favicon-64.png" alt="Logo HopeDev" width={40} height={40} />
                        </Link>
                    </div>
                </header>
                <main className="overflow-x-hidden h-full w-full">
                    {children}
                    <Footer />
                </main>
            </div>
        </>
    );
}