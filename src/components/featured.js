import React from 'react'

const featuredPapers = [
    {
        id: 1,
        img: "1"
    },
    {
        id: 2,
        img: "2"
    },
    {
        id: 3,
        img: "3"
    },
    {
        id: 4,
        img: "4"
    },
]
const Featured = () => {
    return (
        <div className='featured-container'>
            <div className='container'>
                <div className='header-container'>
                    <h1>Featured In</h1>
                </div>
                <div className='image-container'>
                { featuredPapers.map( featuredPaper => (
                        <div className='image' id={featuredPaper.id}>
                            <img src={ require(`../assets/papers/${featuredPaper.img}.png`)} alt='featured-img' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Featured;
