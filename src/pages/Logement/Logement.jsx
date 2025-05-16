import Header from '../../components/Header/Header'
import Carousel from '../../components/Main/Logements/Carousel/Carousel'
import ListingHeader from '../../components/Main/Logements/ListingHeader/ListingHeader'
import Footer from '../../components/Footer/Footer'
import { useParams } from 'react-router'

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
                    <ListingHeader logementId={id} />
                </section>
                
                <h1>Test page logements</h1>   
            </main>
            <Footer />
        </>
    )
}

export default Logements