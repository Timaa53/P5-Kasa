import Header from '../../components/Header/Header'
import Carousel from '../../components/Main/Logements/Carousel'
import Footer from '../../components/Footer/Footer'

function Logements() {
    return(
        <>
            <Header />
            <main>
                <section className="carousel">
                    <Carousel />
                </section>
                <h1>Test page logements</h1>   
            </main>
            <Footer />
        </>
    )
}

export default Logements