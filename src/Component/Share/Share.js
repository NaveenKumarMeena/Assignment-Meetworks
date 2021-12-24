import { ShareOutlined } from '@mui/icons-material'
import React from 'react'
import "./share.css"

function Share(props) {
    return (
        <button className='share-btn'>
            <ShareOutlined/>
            Share
        </button>
    )
}

export default Share
