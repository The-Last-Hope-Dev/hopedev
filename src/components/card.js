import Image from "next/image"

export default function Card({ title, description, image, categoryOne, categoryTwo }) {
    return (
        <div className="card w-96 h-full flex flex-col justify-between shadow-xl">
            <figure className="mx-2">
                <Image src={image} alt={`${title} mockup`} height={400} width={400} />
            </figure>
            <div className="card-body flex-grow">
                <h2 className="card-title text-2xl font-bold">
                    {title}
                </h2>
                <p className="text-xl">{description}</p>
            </div>
            <div className="card-actions flex justify-center mb-4">
                <div className="badge badge-outline p-3 ">{categoryOne}</div>
                <div className="badge badge-outline p-3">{categoryTwo}</div>
            </div>
        </div>
    )
}
