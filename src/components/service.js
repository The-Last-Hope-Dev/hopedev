import Image from "next/image"
export default function Service({ isLeft, title, description, badgeOne, badgeTwo, image }) {
    return (
        <div className="hero">
            <div className={`hero-content flex-col ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"} p-0`}>
                <Image className="transform scale-x-[-1]" src={image} alt={`${title} svg image`} width={450} height={450} />
                <div>
                    <h1 className="text-4xl font-bold">{title}</h1>
                    <p className="py-6 text-xl">{description}</p>
                    <div className="badge badge-primary mr-3">{badgeOne}</div>
                    <div className="badge badge-primary">{badgeTwo}</div>
                </div>
            </div>
        </div>
    )
}
