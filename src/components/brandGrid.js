import React from 'react'
import Image from 'next/image';
import { BRANDS } from '@/utils/constants';
const BrandGrid = () => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-5 lg:gap-x-20 gap-y-2">
            {BRANDS.map((brand, index) => (
                <Image
                    key={index}
                    src={brand.image}
                    alt={brand.name + brand.description}
                    width={180}
                    height={72}
                    className={`${brand.filter ? 'gridBrandWithFilter': 'gridBrand'} object-contain`}
                />
            ))}
        </div>
    )
}


export default BrandGrid