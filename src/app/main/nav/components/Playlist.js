import React from "react"
import { AddBoxOutlined, ArticleOutlined } from "@mui/icons-material"
import { Typography } from "@mui/material"

function Playlist() {

    return (
        <div id='Playlist' className="flex flex-col pb-2">

            <Typography className='py-3 px-2 uppercase' fontWeight={'bold'} sx={{ color: '#7c8db5'}}>Playlist</Typography>

            <div id='home' className="flex items-center">
                <AddBoxOutlined className='m-2' sx={{ color: '#7c8db5', fontSize: 30}}/>
                <Typography className='pl-2' fontWeight={'bold'} sx={{ color: '#7c8db5'}}>News</Typography>
            </div>

            <div id='home' className="flex items-center">
                <ArticleOutlined className='m-2' sx={{ color: '#7c8db5', fontSize: 30}}/>
                <Typography className='pl-2' fontWeight={'bold'} sx={{ color: '#7c8db5'}}>Search</Typography>
            </div>

            <div id='home' className="flex items-center">
                <ArticleOutlined className='m-2' sx={{ color: '#7c8db5', fontSize: 30}}/>
                <Typography className='pl-2' fontWeight={'bold'} sx={{ color: '#7c8db5'}}>Discover</Typography>
            </div>

        </div>
    )

}

export default Playlist