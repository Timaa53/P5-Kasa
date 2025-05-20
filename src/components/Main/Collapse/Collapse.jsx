import { useState } from 'react'
import CloseCollapse from '../../../assets/images/Collapses/closed_collapse.png'
import OpenCollapse from '../../../assets/images/Collapses/open_collapse.png'

function Collapse({sectionName, children}) {
    const [isOpen, setIsOpen] = useState(false);
    const CollapseChanger = () => setIsOpen(!isOpen);

    return(
        <>
            <div className="collapse-bar">
                <p className="article-title">{sectionName}</p> 
                <button type="button" className="collapse-button" onClick={CollapseChanger}>
                    <img src={isOpen ? OpenCollapse : CloseCollapse} alt="Bouton détails" />
                </button>
            </div>
            {isOpen && children}
        </>
    )
}

export default Collapse