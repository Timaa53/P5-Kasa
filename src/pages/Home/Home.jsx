import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Main/Banner/Banner'
import Logements from '../../components/Main/Logements/Logements'

function Home() {
    return (
        <>
        <Header />
        <main className="homepage-content">
            <Banner />
            <div className="gallery">
            <Logements />
            </div>
        </main>
        <Footer />
        </>
    )
}

export default Home
