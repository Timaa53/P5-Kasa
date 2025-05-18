import StarActive from '../../../../assets/images/Rating/star-active.svg'
import StarInactive from '../../../../assets/images/Rating/star-inactive.svg'
import {useState, useCallback} from 'react'
import LogementsData from '../LogementsData'

function ListingRating ({logementId}) {
    const [logementRating, setLogementRating] = useState([]);
    const setLogementData = useCallback((data) => {setLogementRating(data)}, []);

    return(
        <div className="listing-rating">
            <LogementsData
            extractData={["id", "rating"]}
            logementId={logementId}
            logementsDataFiltered={setLogementData}
            />

            {[...Array(5)].map((_, index) => (
                <img className="rating-stars"
                key={index}
                src={
                    index < parseInt(logementRating[0]?.rating)
                    ? StarActive : StarInactive
                }
                alt={index <parseInt(logementRating[0]?.rating)
                    ? "Etoile pleine" : "Etoile vide"
                }
                />
            ))}
        </div>
    )
}

export default ListingRating