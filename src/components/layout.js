import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Footer from './footer'
import NavBar from './navbar'

export default function Layout({ children, title, description }) {

    return (
        <>
            <Head>
                <link rel="icon" href="/imgs/favicon-64.png" />
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
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
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal mr-2">
                                <NavBar />
                            </ul>
                        </div>
                    </header>
                    <main className="overflow-x-hidden h-full w-full">
                        {children}
                        <Footer />
                    </main>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 flex justify-center">
                        <NavBar />
                    </ul>
                </div>
            </div>
        </>
    );
}