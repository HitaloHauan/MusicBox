import React from "react"
import ArtistisRecent from "./content/ArtistisRecent"
import TopArtists from "./content/TopArtists"

function RightContent() {
    return (
        <div id='right-content' className="flex flex-col w-96 bg-white border-l-2 border-gray-200">
            <ArtistisRecent/>
            <TopArtists/>
        </div>
    )
}

export default RightContent