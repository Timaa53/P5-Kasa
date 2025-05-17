import { useState, useCallback } from 'react'
import LogementsData from '../LogementsData'

function ListingTitle({logementId}) {
    const [logementTitle, setLogementTitle] = useState([]);
    const setLogementData = useCallback((data) => {setLogementTitle(data);}, []);

    return(
        <div className="title-location">
            <LogementsData
            extractData={["id", "title", "location"]}
            logementId={logementId}
            logementsDataFiltered={setLogementData}
            />

            {logementTitle[0]?.title &&(
                <h2 className="listingHeader-title">{logementTitle[0].title}</h2>
            )}
            {logementTitle[0]?.title &&(
                <p className="listingHeader-location">{logementTitle[0].location}</p>
            )}
        </div>
    )
}

export default ListingTitle