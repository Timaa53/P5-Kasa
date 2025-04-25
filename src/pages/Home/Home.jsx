import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Main/Banner/Banner'
import Gallery from '../../components/Main/LogementGallery/LogementGallery'

function Home() {
    return (
        <>
        <Header />
        <main className="homepage-content">
            <Banner />
            <div className="gallery">
                <Gallery />
            </div>
        </main>
        <Footer />
        </>
    )
}

export default Home
