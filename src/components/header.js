import React from 'react'

const Header = () => {
    return (
        <div className='header'>
            <div className='container'>
                <div className='row v-center space-between'>
                    <div className='logo'>WheelStreet</div>
                        <div className='menu-item'>
                        <ul>
                            <li>About</li>
                            <li>Fleet</li>
                            <li>Featured</li>
                            <button className='sign-in'>Sign In</button>
                            <button className='sign-up'>Sign Up</button>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
