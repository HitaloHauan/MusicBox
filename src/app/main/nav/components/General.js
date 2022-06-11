import React from "react"
import { SettingsOutlined, LogoutOutlined } from "@mui/icons-material"
import { Typography } from "@mui/material"

function General() {

    return (
        <div id='General' className="flex flex-col pb-2">

            <Typography className='py-3 px-2 uppercase' fontWeight={'bold'} sx={{ color: '#7c8db5'}}>General</Typography>

            <div id='home' className="flex items-center">
                <SettingsOutlined className='m-2' sx={{ color: '#7c8db5', fontSize: 30}}/>
                <Typography className='pl-2' fontWeight={'bold'} sx={{ color: '#7c8db5'}}>Settings</Typography>
            </div>

            <div id='home' className="flex items-center">
                <LogoutOutlined className='m-2' sx={{ color: '#7c8db5', fontSize: 30}}/>
                <Typography className='pl-2' fontWeight={'bold'} sx={{ color: '#7c8db5'}}>Log Out</Typography>
            </div>

        </div>
    )

}

export default General