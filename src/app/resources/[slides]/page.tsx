import React from 'react'
type PageProps = {
    params: {
        slides: string;
    };
};

async function page({ params }: PageProps) {
    const { slides } = await params
    return (
        <div>Slide name- {slides}

        </div>
    )
}

export default page