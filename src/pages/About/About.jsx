import Header from '../../components/Header/Header'
import Banner from '../../components/Main/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import Section from '../../components/Main/Section/Section'

function About () {
    return (
        <>
        <Header />
        <main className="aboutpage-content">
        <Banner image="../../../src/assets/images/Banner_about.png" textBanner={false} />
        <section className="about-sections">
            <Section sectionName="Fiabilité" />
            <Section sectionName="Respect" />
            <Section sectionName="Service" />
            <Section sectionName="Sécurité" />            
        </section>
        </main>
        <Footer />
        </>

    )
}

export default About