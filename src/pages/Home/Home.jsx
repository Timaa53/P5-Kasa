import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Main/Banner/Banner'
import Gallery from '../../components/Main/Home/LogementGallery/LogementGallery'
import bannerHome from '../../assets/images/Banner_home.png'

function Home() {
  return (
    <>
        <Header />
        <main className="homepage-content">
        <Banner image={bannerHome} textBanner="Chez vous, partout et ailleurs" />
        <Gallery />
      </main>
      <Footer />
    </>
  )
}

export default Home
