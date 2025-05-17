import { useState, useCallback } from 'react'
import LogementsData from '../LogementsData'

function ListingTags({logementId}) {
    const [logementTags, setLogementTags] = useState ([]);
    const setLogementData = useCallback((data) => {setLogementTags(data)}, []);

    return(
        <div className="logement-tags">
            <LogementsData
            extractData={["id", "tags"]}
            logementId={logementId}
            logementsDataFiltered={setLogementData}
            />

            {logementTags[0]?.tags?.length > 0 && 
            logementTags[0].tags.map((tag, index) => (
                <p key={index}>{tag}</p>
            ))
            }
        </div>
    )
}

export default ListingTags