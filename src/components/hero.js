import React from 'react'
import { FormattedMessage, useIntl } from "react-intl";
import Link from "next/link"

const HeroComponent = ({ urlImage, width, height, title, description, ctaText, ctaLink }) => {
    const intl = useIntl();

    return (
        <div className="hero min-h-screen bgGradient" style={{ backgroundImage: `url(${urlImage})`, width: width, height: height }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center ">
                <div className="max-w-md">
                    <h1 className="mb-5 text-6xl font-bold">{title}</h1>
                    <p className="mb-5 text-xl">
                        <FormattedMessage id={description} />
                    </p>
                    <Link href={ctaLink} hrefLang="x-default">
                        <button className="btn btn-primary">
                            <FormattedMessage id={ctaText} />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroComponent