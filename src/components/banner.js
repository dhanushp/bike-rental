import React from "react";

const Banner = () => {
  return (
    <div className='main'>
        <div className='container'>
            <div className='bike-container'>
                <div className='bg-color'>
                    <div className='bike'>
                        <img src={require(`../assets/duke.png`)} alt='' />
                    </div>
                </div>
            </div>
            <div className='text-container'>
                <h1>
                    <div className='line'>
                        Own the <span>Experience</span>,
                    </div>
                    <div className='line'>
                        <span>Ride</span> in style.
                    </div>
                </h1>
            </div>
        </div>
    </div>
  );
};

export default Banner;