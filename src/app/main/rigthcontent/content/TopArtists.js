import React from "react"
import { Avatar, IconButton, Typography } from "@mui/material"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ReadMoreIcon from '@mui/icons-material/ReadMore';

function TopArtists() {
    return (
        <div id="artists-top" className='flex flex-col px-5 pt-10 w-full'>
            
            <div className='flex items-center justify-between w-full'>
                <Typography variant='h6' fontWeight={'bold'} className='' >Top Artists</Typography>
                <IconButton className='align-rigth' type="submit" sx={{ p: '10px' }} aria-label="search">
                    <ReadMoreIcon sx={{color: '#000'}} />
                </IconButton>
            </div>

            <div className='flex flex-col'>

                <div className='flex pt-5 justify-between'>
                    <div className='flex'>
                        <Avatar sx={{w: 64, h: 64}}  variant="rounded" />
                        <div className='flex flex-col pl-5'>
                            <Typography fontWeight={'bold'} variant='h7'>Name Artist</Typography>
                            <Typography variant='h8' fontWeight={600} sx={{color: '#7c8db5'}} >000 Songs in library</Typography>
                        </div>
                    </div>
                    <IconButton className='align-rigth' type="submit" sx={{ p: '10px' }} aria-label="search">
                        <MoreHorizIcon sx={{color: '#000'}} />
                    </IconButton>
                </div>

                <div className='flex pt-5 justify-between'>
                    <div className='flex'>
                        <Avatar sx={{w: 64, h: 64}}  variant="rounded" />
                        <div className='flex flex-col pl-5'>
                            <Typography fontWeight={'bold'} variant='h7'>Name Artist</Typography>
                            <Typography variant='h8' fontWeight={600} sx={{color: '#7c8db5'}} >000 Songs in library</Typography>
                        </div>
                    </div>
                    <IconButton className='align-rigth' type="submit" sx={{ p: '10px' }} aria-label="search">
                        <MoreHorizIcon sx={{color: '#000'}} />
                    </IconButton>
                </div>

                <div className='flex pt-5 justify-between'>
                    <div className='flex'>
                        <Avatar sx={{w: 64, h: 64}}  variant="rounded" />
                        <div className='flex flex-col pl-5'>
                            <Typography fontWeight={'bold'} variant='h7'>Name Artist</Typography>
                            <Typography variant='h8' fontWeight={600} sx={{color: '#7c8db5'}} >000 Songs in library</Typography>
                        </div>
                    </div>
                    <IconButton className='align-rigth' type="submit" sx={{ p: '10px' }} aria-label="search">
                        <MoreHorizIcon sx={{color: '#000'}} />
                    </IconButton>
                </div>

                <div className='flex pt-5 justify-between'>
                    <div className='flex'>
                        <Avatar sx={{w: 64, h: 64}}  variant="rounded" />
                        <div className='flex flex-col pl-5'>
                            <Typography fontWeight={'bold'} variant='h7'>Name Artist</Typography>
                            <Typography variant='h8' fontWeight={600} sx={{color: '#7c8db5'}} >000 Songs in library</Typography>
                        </div>
                    </div>
                    <IconButton className='align-rigth' type="submit" sx={{ p: '10px' }} aria-label="search">
                        <MoreHorizIcon sx={{color: '#000'}} />
                    </IconButton>
                </div>

            </div>
        </div>
    )
}

export default TopArtists