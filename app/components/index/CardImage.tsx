import React from 'react'

interface CardImageSmallProps {
    imageUrl: string;
    title: string;
    description: string;
}

export const CardImageSmall = ({ imageUrl, title, description }: CardImageSmallProps) => {
    return (
        <div className="w-1/2 p-1 md:p-2">
            <div className='relative group'>
                <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-400"
                    src={imageUrl} />
                <div className='absolute bottom-0 left-0 w-full text-white p-2'>
                    <p>{title}</p>
                    <p style={{ fontWeight: 'bold' }}>{description}</p>
                </div>
            </div>
        </div>
    )
}

export const CardImageBig = ({ imageUrl, title, description }: CardImageSmallProps) => {
    return (
        <div className="w-full p-1 md:p-2">
            <div className='relative group'>
                <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-400"
                    src={imageUrl} />
                <div className='absolute bottom-0 left-0 w-full text-white p-2'>
                    <p >
                        {title}
                    </p>
                    <p >
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}


