import { Typography } from "@mui/material"
import React from "react"
import MusicBox from '../../../assets/icons/musicbox.png'

function Logo() {

    return(

        <div className='flex items-center' id='logo'>
            <img alt='logo' src={MusicBox} style={{width: 60}} className='mr-3' />
            <Typography fontSize={25} fontWeight='bold' >MusicBox</Typography>
        </div>
    )
}

export default Logo