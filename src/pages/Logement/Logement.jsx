import Header from '../../components/Header/Header'
import Carousel from '../../components/Main/Logements/Carousel'
import Footer from '../../components/Footer/Footer'
import { useParams } from 'react-router'

function Logements() {
    const {id} = useParams();

    return(
        <>
            <Header />
            <main>
                <section className="carousel">
                    <Carousel logementId={id}>
                        {/* <div className="carousel-img"></div> */}
                        {/* <div className="carousel-btn"></div> */}
                        {/* <div className="carousel-counter"></div> */}
                    </Carousel>
                </section>
                <h1>Test page logements</h1>   
            </main>
            <Footer />
        </>
    )
}

export default Logements