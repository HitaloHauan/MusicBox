import React from "react"
import { Avatar, IconButton, Typography } from "@mui/material"
import ReadMoreIcon from '@mui/icons-material/ReadMore';

function ArtistisRecent() {
    return (
        <div id="artists-top" className='flex flex-col px-5 pt-10 w-full'>
            
            <div className='flex items-center justify-between w-full'>
                <Typography variant='h6' fontWeight={'bold'} className='' >Recents</Typography>
                <IconButton className='align-rigth' type="submit" sx={{ p: '10px' }} aria-label="search">
                    <ReadMoreIcon sx={{color: '#000'}} />
                </IconButton>
            </div>

            <div className='flex flex-col'>
                <div className='flex flex-col pt-5 items-center'>
                    <Avatar sx={{width: 100, height: 100}} variant="rounded"/>
                    <Typography fontWeight={'bold'} variant='h7'>Name Artist</Typography>
                </div>
            </div>
            
        </div>
    )
}

export default ArtistisRecent