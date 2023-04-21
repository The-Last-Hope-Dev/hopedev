import Image from "next/image"
import Link from "next/link"
import { FormattedMessage } from "react-intl";
import { useRouter } from "next/router";

export default function Footer() {
    const { locales } = useRouter();

    return (
        <>
            <footer className="footer p-10 bg-base-300 text-primary-content text-base">
                <div>
                    <span className="footer-title">
                        <FormattedMessage id="page.footer.section.content" />
                    </span>
                    <Link href='/services' className="link link-hover" hrefLang="x-default">
                        <FormattedMessage id="page.route.services" />
                    </Link>
                    <Link href='/tools' className="link link-hover" hrefLang="x-default">
                        <FormattedMessage id="page.route.tools" />
                    </Link>
                    <Link href='/blog' className="link link-hover" hrefLang="x-default">
                        <FormattedMessage id="page.route.blog" />
                    </Link>
                </div>
                <div>
                    <span className="footer-title">
                        <FormattedMessage id="page.footer.section.company" />
                    </span>
                    <Link href='/team' className="link link-hover" hrefLang="x-default">
                        <FormattedMessage id="page.route.team" />
                    </Link>
                    <Link href='/portfolio' className="link link-hover" hrefLang="x-default">
                        <FormattedMessage id="page.route.portfolio" />
                    </Link>
                    <Link href='/cv' className="link link-hover" hrefLang="x-default">
                        <FormattedMessage id="page.route.cv" />
                    </Link>
                    <Link href='/contact' className="link link-hover" hrefLang="x-default">
                        <FormattedMessage id="page.route.contact" />
                    </Link>
                </div>
                <div>
                    <span className="footer-title">
                        <FormattedMessage id="page.footer.section.legal" />
                    </span>
                    <Link href='/team' className="link link-hover" hrefLang="x-default">
                        <FormattedMessage id="page.footer.link.terms" />
                    </Link>
                    <Link href='/portfolio' className="link link-hover" hrefLang="x-default">
                        <FormattedMessage id="page.footer.link.privacy" />
                    </Link>
                    <Link href='/cv' className="link link-hover" hrefLang="x-default">
                        <FormattedMessage id="page.footer.link.cookie" />
                    </Link>
                </div>
                <div>
                    <span className="footer-title">
                        <FormattedMessage id="page.footer.section.language" />
                    </span>
                    {[...locales].sort().map((locale) => {
                        return locale == 'en' ? (
                            <Link className="link link-hover" key={locale} href="/" locale={locale} hrefLang="en">
                                <FormattedMessage id="page.footer.link.english" />
                            </Link>
                        ) : (
                            <Link className="link link-hover" key={locale} href="/" locale={locale} hrefLang="es">
                                <FormattedMessage id="page.footer.link.spanish" />
                            </Link>
                        )
                    })}
                </div>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-base-300 text-primary-content border-base-100 text-base">
                <div className="items-center grid-flow-col">
                    <Link href="/" hrefLang="x-default">
                        <Image src="/imgs/logo.png" alt="Logo HopeDev" width={40} height={40} />
                    </Link>
                    <p>Hope Dev. <br />
                        <FormattedMessage id="page.footer.text.company" />
                    </p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </div>
            </footer>
        </>
    )
}
