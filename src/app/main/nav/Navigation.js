import React from 'react'
import General from './components/General'
import Library from './components/Library'
import Logo from './components/Logo'
import Menu from './components/Menu'
import Playlist from './components/Playlist'

function Navgation() {

    return ( 
        <div id='nav' className='flex flex-col h-full border-r-2 border-gray-200 w-72 bg-white'>
            <div className="flex flex-col pl-8 pt-2 overflow-auto grow">
                <Logo/>
                <Menu/>
                <Library/>
                <Playlist/>
                <General/>
            </div>
        </div>
    )
}

export default Navgation