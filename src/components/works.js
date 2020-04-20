import React from 'react';

const cardDetails = [
    {
        id: 1,
        detail: "Search for and book a bike on our site!",
        img: "1"
    },
    {
        id: 2,
        detail: "Upload your driver’s license, and pay a small security deposit.",
        img: "2"
    },
    {
        id: 3,
        detail: "We SMS your bike details 20 minutes before pickup. Unlock it via the WheelStreet app.",
        img: "3"
    },
    {
        id: 4,
        detail: "Fill the start checklist in the WheelStreet app. Grab the keys from the glove-box and drive",
        img: "4"
    },
    {
        id: 5,
        detail: "Return the bike to the same location and fill the end checklist to end your trip.",
        img: "5"
    }
]

const Works = () => {
    return (
        <div className='works-container'>
            <div className='container'>
                <div className='works-header'>
                    <h1>How WheelStreet Works</h1>
                </div>
                <div className='works-subhead'>
                <   p>Drive yourself to an adventure and back in 5 simple steps</p>
                </div>
                <div className='card-container'>
                    { cardDetails.map( cardDetail => (
                        <div className='card-box' id={cardDetail.id}>
                            <div className='card-image'>
                                <img src={require(`../assets/works/${cardDetail.img}.svg`)} alt='card-img'></img>
                            </div>
                            <div className='card-detail'>
                                <p>{cardDetail.detail}</p>
                            </div>
                        </div>
                    )) }
                </div>
                <div className='bttn-container'>
                    <button className='sign-up'>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Works;
