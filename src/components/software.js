import React from 'react'

const Software = () => {
    return (
        <div className='software-container'>
            <div className='container'>
                <div className='left-container'>
                    <div className='software-header'>
                        <h1><span>WheelStreet</span> on the GO!</h1>
                    </div>
                    <div className='software-bio'>
                        <div className='line'>
                            <p>Make a booking, unlock your bike, and end your reservation all from our app.</p>
                        </div>
                        <div className='line'>
                            <p>Get exclusive app only offers and coupons at one place and all the account information from our Android and IOS app.</p>
                        </div>
                        <div className='line'>
                            <p>What are you waiting for? Download our App now.</p>
                        </div>
                    </div>
                    <div className='app-store'>
                        <img src={require(`../assets/play_store.png`)} alt='playstore' />
                        <img src={require(`../assets/app_store.png`)} alt='appstore' />
                    </div>
                </div>
                <div className='right-container'>
                    <div className='iphone-image'>
                        <img src={require(`../assets/iphone.png`)} alt='iphone' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Software
