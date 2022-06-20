import React from "react"
import { AccessTimeOutlined , FavoriteBorder , FolderOutlined } from "@mui/icons-material"
import { Typography } from "@mui/material"
import styled from "styled-components";
import { Button } from "flowbite-react";


const CustomizedButton = styled(Button)`

    border-right-width: 0;
    border-bottom-width: 0;
    border-top-width: 0;
    border-left-width: 0;

  :hover {
    border-right-width: 4px;
    border-bottom-width: 0;
    border-top-width: 0;
    border-left-width: 0;
    border-color: black;
  }
`;

function Library() {

    return (
        <div id='Library' className="flex flex-col pb-2">

            <Typography className='py-3 px-2 uppercase' fontWeight={'bold'} sx={{ color: '#7c8db5'}}>Library</Typography>

            <CustomizedButton variant='text' className='h-12'>
                <div id='home' className="flex items-center justify-start">
                    <AccessTimeOutlined className='m-2' sx={{ color: '#7c8db5', fontSize: 30}}/>
                    <Typography className='pl-2' fontWeight={'bold'} sx={{ color: '#7c8db5'}}>Recent</Typography>
                </div>
            </CustomizedButton>

            <CustomizedButton variant='text' className='h-12'>
                <div id='home' className="flex items-center justify-start">
                    <FavoriteBorder  className='m-2' sx={{ color: '#7c8db5', fontSize: 30}}/>
                    <Typography className='pl-2' fontWeight={'bold'} sx={{ color: '#7c8db5'}}>Favourites</Typography>
                </div>
            </CustomizedButton>

            <CustomizedButton variant='text' className='h-12'>
                <div id='home' className="flex items-center justify-start">
                    <FolderOutlined  className='m-2' sx={{ color: '#7c8db5', fontSize: 30}}/>
                    <Typography className='pl-2' fontWeight={'bold'} sx={{ color: '#7c8db5'}}>Local</Typography>
                </div>
            </CustomizedButton>
           
        </div>
    )

}

export default Library