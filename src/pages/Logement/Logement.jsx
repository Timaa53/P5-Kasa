import Header from '../../components/Header/Header'
import Carousel from '../../components/Main/Logements/Carousel/Carousel'
import ListingTitle from '../../components/Main/Logements/ListingHeader/ListingTitle'
import ListingHoster from '../../components/Main/Logements/ListingHeader/ListingHoster'
import ListingTags from '../../components/Main/Logements/ListingHeader/ListingTags'
import Footer from '../../components/Footer/Footer'
import {useParams} from 'react-router'

function Logements() {
    const {id} = useParams();

    return(
        <>
            <Header />
            <main>
                <section className="carousel">
                    <Carousel logementId={id} />
                </section>

                <section className="listing-header">
                    <div className="listing-title-hoster">
                        <ListingTitle logementId={id} />
                        <ListingHoster logementId={id} />
                    </div>
                    <div className="listing-tags-rating">
                        <ListingTags logementId={id} />
                        {/* sqdqsdqsdqs */}
                    </div>
                </section>
                
                <h1>Test page logements</h1>   
            </main>
            <Footer />
        </>
    )
}

export default Logements