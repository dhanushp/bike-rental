import React from "react";
import { ReactComponent as Duke } from "../assets/duke.svg";

const Banner = () => {
  return (
    <div className='main'>
        <div className='container-fluid'>
            <div className='bg-color'>
            <div className='bike'>
                <Duke />
            </div>
            </div>
            
        </div>
    </div>
  );
};

export default Banner;
