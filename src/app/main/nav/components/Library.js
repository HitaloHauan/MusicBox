import React from "react"
import { AccessTimeOutlined , FavoriteBorder , FolderOutlined  } from "@mui/icons-material"
import { Typography } from "@mui/material"

function Library() {

    return (
        <div id='Library' className="flex flex-col pb-2">

            <Typography className='py-3 px-2 uppercase' fontWeight={'bold'} sx={{ color: '#7c8db5'}}>Library</Typography>

            <div id='home' className="flex items-center">
                <AccessTimeOutlined className='m-2' sx={{ color: '#7c8db5', fontSize: 30}}/>
                <Typography className='pl-2' fontWeight={'bold'} sx={{ color: '#7c8db5'}}>Recent</Typography>
            </div>

            <div id='home' className="flex items-center">
                <FavoriteBorder  className='m-2' sx={{ color: '#7c8db5', fontSize: 30}}/>
                <Typography className='pl-2' fontWeight={'bold'} sx={{ color: '#7c8db5'}}>Favourites</Typography>
            </div>

            <div id='home' className="flex items-center">
                <FolderOutlined  className='m-2' sx={{ color: '#7c8db5', fontSize: 30}}/>
                <Typography className='pl-2' fontWeight={'bold'} sx={{ color: '#7c8db5'}}>Local</Typography>
            </div>

        </div>
    )

}

export default Library