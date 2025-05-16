import { useState, useCallback } from 'react'
import LogementsData from '../LogementsData'

function ListingTitle({logementId}) {
    const [logementTitle, setLogementTitle] = useState([]);
    const setLogementData = useCallback((data) => {setLogementTitle(data);}, []);

    return(
        <>
            <LogementsData
            extractData={["id", "title", "location"]}
            logementId={logementId}
            logementsDataFiltered={setLogementData}
            />

            {logementTitle?.title &&(
                <h2 className="listingHeader-title">{logementTitle.title}</h2>
            )}
        </>
    )
}

export default ListingTitle