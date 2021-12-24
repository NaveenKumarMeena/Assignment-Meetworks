import { Explore, ExploreOutlined, HeadsetMicOutlined, PeopleAltOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import "./header.css"


function Header() {
    const [click , setclick] = useState(true);
    return (
        <div className='header-container'>
            <button className='logo-btn'>
                <span>
                    <img src="https://api.meetworks.in/static/media/logo_header.15c8708a.png" alt="Image not Found" className="logo-image" />
                </span>
            </button>
            <div className="options">
             <button className="discovery-btn  option " onClick={() => setclick(!click)}>
                 <div className={`discovery-text option-text ${click? "on1" : " "}`}>
                 <ExploreOutlined className='icon-discovery'/>
                 Discovery
                 </div>
             </button>
             <button className="discovery-btn option ">
                 <div className='discovery-text option-text on2'>
                 <PeopleAltOutlined className='icon-discovery'/>
                 Invite
                 </div>
             </button>
             <button className="discovery-btn option ">
                 <div className='discovery-text option-text on3'>
                 <HeadsetMicOutlined className='icon-discovery'/>
                 Support
                 </div>
             </button>
            </div>
            <div className="post-btn">
                <button className="post-btn btn"><h5>Post Job</h5></button>
                <button className="signin-btn btn"><h5>Sign In</h5></button>
            </div>
            
        </div>
    )
}

export default Header
