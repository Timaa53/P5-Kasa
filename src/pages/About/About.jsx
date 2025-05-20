import Header from '../../components/Header/Header'
import Banner from '../../components/Main/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import Collapse from '../../components/Main/Collapse/Collapse'

function About () {
    return (
        <>
        <Header />
        <main className="aboutpage-content">
            <Banner image="../../../src/assets/images/Banner_about.png" textBanner="" />
            <section className="about-sections">
                <article className="articles-section">
                    <Collapse sectionName="Fiabilité">
                        <p className="collapse-text">Les annonces postées sur Kasa garantissent une fiabilité totale.
                        Les photos sont conformes aux logements, et toutes les informations sont
                        régulièrement vérifiées par nos équipes.
                        </p>   
                    </Collapse>                    
                </article>
                
                <article className="articles-section">
                    <Collapse sectionName="Respect">
                        <p className="collapse-text">La bienveillance fait partie des valeurs fondatrices de Kasa.
                        Tout comportement discriminatoire ou de perturbation du voisinage entraînera
                        une exclusion de notre plateforme.
                        </p>   
                    </Collapse>
                </article>

                <article className="articles-section">
                    <Collapse sectionName="Service">
                        <p className="collapse-text">La qualité du service est au cœur de notre engagement chez Kasa.
                        Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos
                        locataires, soit empreinte de respect et de bienveillance
                        </p>   
                    </Collapse>
                </article> 
                
                <article className="articles-section">
                    <Collapse sectionName="Sécurité">
                        <p className="collapse-text">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les
                        voyageurs, chaque logement correspond aux critères de sécurité établis par
                        nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela
                        permet à nos équipes de vérifier que les standards sont bien respectés.
                        Nous organisons également des ateliers sur la sécurité domestique pour nos
                        hôtes.
                        </p>  
                    </Collapse>
                </article>
            </section>
        </main>
        <Footer />
        </>

    )
}

export default About