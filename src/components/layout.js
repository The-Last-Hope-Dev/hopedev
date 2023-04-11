import Head from 'next/head'
import NavBar from './navbar'
import Footer from './footer'

export default function Layout({ children, title, description }) {

    return (
        <>
            <Head>
                <link rel="icon" href="/imgs/favicon.ico" />
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            <NavBar />
            <main>{children}</main>
            <Footer />
        </>
    );
}