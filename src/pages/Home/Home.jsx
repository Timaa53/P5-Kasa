import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Main/Banner/Banner'
import Gallery from '../../components/Main/Home/LogementGallery/LogementGallery'

function Home() {
    return (
        <>
        <Header />
        <main className="homepage-content">
            <Banner image="../../../src/assets/images/Banner_home.png" textBanner={true} />
            <Gallery />
        </main>
        <Footer />
        </>
    )
}

export default Home
