import { useState } from 'react'
import CloseCollapse from '../../../assets/images/Collapses/closed_collapse.png'
import OpenCollapse from '../../../assets/images/Collapses/open_collapse.png'

function Section ({sectionName, children}) {
    const [isOpen, setIsOpen] = useState(false);
    const CollapseChanger = () => setIsOpen(!isOpen);

    return(
        <section className="section">
            <div className="section-bar">
                <p className="section-title">{sectionName}</p>
                <button className="collapse-button" onClick={CollapseChanger}>
                    <img src={isOpen ? OpenCollapse : CloseCollapse} alt="Bouton détails" />
                </button>
            </div>
            {isOpen && children}
        </section>
    );
}

export default Section
