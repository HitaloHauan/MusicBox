import React from "react"
import { AddBoxOutlined, ArticleOutlined } from "@mui/icons-material"
import { Typography } from "@mui/material"
import { Button } from "flowbite-react";
import { styled } from '@mui/material/styles';


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

function Playlist() {

    return (
        <div id='Playlist' className="flex flex-col pb-2">

            <Typography className='py-3 px-2 uppercase' fontWeight={'bold'} sx={{ color: '#7c8db5'}}>Playlist</Typography>

            <CustomizedButton variant='text' className='h-12'>
                <div id='home' className="flex items-center">
                    <AddBoxOutlined className='m-2' sx={{ color: '#7c8db5', fontSize: 30}}/>
                    <Typography className='pl-2' fontWeight={'bold'} sx={{ color: '#7c8db5'}}>News</Typography>
                </div>
            </CustomizedButton>

            <CustomizedButton variant='text' className='h-12'>
                <div id='home' className="flex items-center">
                    <ArticleOutlined className='m-2' sx={{ color: '#7c8db5', fontSize: 30}}/>
                    <Typography className='pl-2' fontWeight={'bold'} sx={{ color: '#7c8db5'}}>Search</Typography>
                </div>
            </CustomizedButton>

            <CustomizedButton variant='text' className='h-12'>
                <div id='home' className="flex items-center">
                    <ArticleOutlined className='m-2' sx={{ color: '#7c8db5', fontSize: 30}}/>
                    <Typography className='pl-2' fontWeight={'bold'} sx={{ color: '#7c8db5'}}>Discover</Typography>
                </div>
            </CustomizedButton>

        </div>
    )

}

export default Playlist