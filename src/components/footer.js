import React from 'react'

const Footer = () => {
    return (
        <div className='footer-parent'>
            <div className='footer-container'>
                <div className='container'>
                    <div className='footer-span'>
                        <div className='wheelstreet'>
                            <div className='wheelstreet-header'>
                                <h1>WheelStreet</h1>
                            </div>
                            <div className='wheelstreet-span'>
                                <div className='line'>
                                    <img src= {require(`../assets/footer/envelope.png`)} alt='envelope' />
                                    <p>support@wheelstreet.com</p>
                                </div>
                                <div className='line'>
                                    <img src= {require(`../assets/footer/phone.png`)} alt='phone' />
                                    <p>+91 9880750994</p>
                                </div>
                            </div>
                        </div>
                        <div className='company'>
                            <div className='company-header'>
                                <h1>Company</h1> 
                            </div>
                            <div className='company-detail'>
                                <p>Blog</p>
                                <p>Careers</p>
                                <p>Contact Us</p>
                            </div>
                        </div>
                        <div className='policies'>
                            <div className='policies-header'>
                                <h1>Policies</h1>
                            </div>
                            <div className='policies-detail'>
                                <p>Privacy Policies</p>
                                <p>Terms &#38; conditions</p>
                            </div>
                        </div>
                        <div className='quicklinks'>
                            <div className='quicklinks-header'>
                                <h1>Quicklinks</h1>
                            </div>
                            <div className='quicklinks-detail'>
                                <p>Tariff</p>
                                <p>Offers</p>
                                <p>Own a franchise</p>
                                <p>Earn with us</p>
                                <p>Indian bike routes</p>
                            </div>
                        </div>
                        <div className='download'>
                            <div className='download-header'>
                                <h1>Download Our App</h1>
                            </div>
                            <div className='download-detail'>
                                <img src={ require(`../assets/app_store.png`) } alt='appstore' />
                                <img src={ require(`../assets/play_store.png`) } alt='playstore' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-child'>
                <p>WheelStreet &copy; { new Date().getFullYear() }</p>
            </div> 
        </div>    
    )
}

export default Footer;
