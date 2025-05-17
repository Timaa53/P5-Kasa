import { useState, useCallback } from 'react'
import LogementsData from '../LogementsData'

function ListingHoster({logementId}) {
    const [logementHoster, setLogementHoster] = useState([]);
    const setLogementData = useCallback((data) => {setLogementHoster(data)}, []);

    return(
        <div className="listingHoster">
            <LogementsData
            extractData={["id", "host"]}
            logementId={logementId}
            logementsDataFiltered={setLogementData}
            />

            {logementHoster[0]?.host.name &&(
                <p className="listingHoster-name">{logementHoster[0].host.name}</p>
            )}
            {logementHoster[0]?.host.picture &&(
                <img
                className="listingHoster-img"
                src={logementHoster[0].host.picture}
                alt={`Photo de ${logementHoster[0].host.name}`}
                title={logementHoster[0].host.name}
                />
            )}
        </div>
    )
}

export default ListingHoster