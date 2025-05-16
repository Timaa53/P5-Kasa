import ListingTitle from './ListingTitle'
// import ListingHoster from './ListingHoster'
// import ListingTags from './ListingTags'
// import ListingRating from './ListingRating'

function ListingHeader({logementId}) {

    return(
        <>
            <div className="title-hoster">
                <ListingTitle logementId={logementId} />
                {/* <ListingHoster logementId={logementId} />   */}
            </div>
            
            {/* <div className="tags-rating">
                <ListingTags logementId={logementId} />
                <ListingRating logementId={logementId} />
            </div> */}
        </>
    )
}

export default ListingHeader