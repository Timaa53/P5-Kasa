import Header from '../../components/Header/Header'
import Carousel from '../../components/Main/Logements/Carousel/Carousel'
import ListingTitle from '../../components/Main/Logements/ListingHeader/ListingTitle'
import ListingHoster from '../../components/Main/Logements/ListingHeader/ListingHoster'
import ListingTags from '../../components/Main/Logements/ListingHeader/ListingTags'
import ListingRating from '../../components/Main/Logements/ListingHeader/ListingRating'
import ListingCollapse from '../../components/Main/Logements/LogementDetails/ListingCollapse'

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
                        <ListingRating logementId={id} />
                    </div>
                </section>

                <section className="logement-details">
                    <article className="article-section">
                        <ListingCollapse
                        logementId={id}
                        sectionName={"Description"}
                        articleKey={"description"}
                        />
                    </article>
                    <article className="article-section">
                        <ListingCollapse
                        logementId={id}
                        sectionName={"Équipements"}
                        articleKey={"equipments"}
                        />
                    </article>
                </section> 
            </main>
            <Footer />
        </>
    )
}

export default Logements