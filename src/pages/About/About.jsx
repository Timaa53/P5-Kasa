import Header from '../../components/Header/Header'
import Banner from '../../components/Main/Banner/Banner'
import Footer from '../../components/Footer/Footer'

function About () {
    return (
        <>
        <Header />
        <main className="aboutpage-content">
        <Banner image="../../../src/assets/images/Banner_about.png" textBanner={false} />
        </main>
        <Footer />
        </>

    )
}

export default About