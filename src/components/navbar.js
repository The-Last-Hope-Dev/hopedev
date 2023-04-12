import Image from "next/image"
import Link from "next/link"
import { FormattedMessage } from "react-intl";

export default function NavBar() {
    return (
        <header className="navbar bg-base-100">
            <div className="w-11/12">
            <div className="flex-1 sm:ml-5">
                <Link href="/" hrefLang="x-default">
                    <Image className="sm:w-11 sm:h-11" src="/imgs/logo.png" alt="Logo HopeDev" width={40} height={40} />
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 z-20">
                    <li tabIndex={0}>
                        <a>
                            <FormattedMessage id="page.route.about" />
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="p-2 bg-base-100 z-10">
                            <li>
                                <Link href='/team' hrefLang="x-default">
                                    <FormattedMessage id="page.route.team" />
                                </Link>
                            </li>
                            <li>
                                <Link href='/portfolio' hrefLang="x-default">
                                    <FormattedMessage id="page.route.portfolio" />
                                </Link>
                            </li>
                            <li>
                                <Link href='/cv' hrefLang="x-default">
                                    <FormattedMessage id="page.route.cv" />
                                </Link>
                            </li>
                            <li>
                                <Link href='/contact' hrefLang="x-default">
                                    <FormattedMessage id="page.route.contact" />
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a>
                            <FormattedMessage id="page.route.others" />
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="p-2 bg-base-100 z-10">
                            <li>
                                <Link href='/services' hrefLang="x-default">
                                    <FormattedMessage id="page.route.services" />
                                </Link>
                            </li>
                            <li>
                                <Link href='/tools' hrefLang="x-default">
                                    <FormattedMessage id="page.route.tools" />
                                </Link>
                            </li>
                            <li>
                                <Link href='/blog' hrefLang="x-default">
                                    <FormattedMessage id="page.route.blog" />
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            </div>
        </header>
    )
}
