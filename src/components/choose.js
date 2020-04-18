import React from 'react'

const chooseWheelStreets = [
    {
        id: 1,
        title: "No Security Deposit",
        img: "1"
    },
    {
        id: 2,
        title: "Doorstep Delivery",
        img: "2"
    },
    {
        id: 3,
        title: "Smart Check-in",
        img: "3"
    },
    {
        id: 4,
        title: "Pay Later",
        img: "4"
    },
    {
        id: 5,
        title: "Instant Refund",
        img: "5"
    }
]

const Choose = () => {
    return (
        <div className='choose-container'>
            <div className='container'>
                <div className='choose-header'>
                    <h1>Why Choose WheelStreet</h1>
                </div>
                <div className='image-container'>
                    { chooseWheelStreets.map( chooseWheelStreet => (
                        <div className='image-box' key={chooseWheelStreet.id}>
                            <div className='choose-image'>
                                <img src={require(`../assets/choose/${chooseWheelStreet.img}.svg`)} alt={chooseWheelStreet.title} />
                            </div>
                            <div className='choose-title'>
                                <p>{chooseWheelStreet.title}</p>
                            </div>
                        </div>
                    ) )}
                </div>
            </div>
        </div>
    )
}

export default Choose;
