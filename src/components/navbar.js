import { useState, useEffect } from "react";
import Link from 'next/link';
import { FormattedMessage } from "react-intl";
import { isMobile } from 'react-device-detect'
export default function NavBar() {
    const [showHomeButton, setShowHomeButton] = useState(false);

    useEffect(() => {
        isMobile ? setShowHomeButton(true) : setShowHomeButton(false);
    }, [])

    return (
        <>
            {showHomeButton ? (
                <li>
                    <Link href='/' hrefLang="x-default" className="rounded-lg">
                        <FormattedMessage id="page.route.home" />
                    </Link>
                </li>
            ) : null}
            <li>
                <Link href='/services' hrefLang="x-default" className="rounded-lg">
                    <FormattedMessage id="page.route.services" />
                </Link>
            </li>
            <li>
                <Link href='/team' hrefLang="x-default" className="rounded-lg">
                    <FormattedMessage id="page.route.team" />
                </Link>
            </li>
            <li>
                <Link href='/portfolio' hrefLang="x-default" className="rounded-lg">
                    <FormattedMessage id="page.route.portfolio" />
                </Link>
            </li>
            <li>
                <Link href='/tools' hrefLang="x-default" className="rounded-lg">
                    <FormattedMessage id="page.route.tools" />
                </Link>
            </li>
            <li>
                <Link href='/cv' hrefLang="x-default" className="rounded-lg">
                    <FormattedMessage id="page.route.cv" />
                </Link>
            </li>
            <li>
                <Link href='/blog' hrefLang="x-default" className="rounded-lg">
                    <FormattedMessage id="page.route.blog" />
                </Link>
            </li>
            <li>
                <Link href='/contact' hrefLang="x-default" className="rounded-lg">
                    <FormattedMessage id="page.route.contact" />
                </Link>
            </li>
        </>
    )
}
