import React from 'react'
import { Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function Search() {


    return (
        <div id='search' className='flex h-12 justfy-center my-5'>
            <Paper
                component="form"
                sx={{ p: '1px 3px', display: 'flex', alignItems: 'center', width: 600, boxShadow: 'none', borderRadius: 20 }}
                >
                <IconButton type="submit" sx={{ p: '10px 20px' }} aria-label="search">
                    <SearchIcon sx={{color: '#000'}} />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search for artist, music and ..."
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Paper>
        </div>
    )
}

export default Search