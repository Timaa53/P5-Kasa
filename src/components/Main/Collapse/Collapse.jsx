// import { useState } from 'react'
// import CloseCollapse from '../../../assets/images/Collapses/closed_collapse.png'
// import OpenCollapse from '../../../assets/images/Collapses/open_collapse.png'

// function Collapse({children}) {
//     const [isOpen, setIsOpen] = useState(false)
//     const CollapseChanger = () => setIsOpen(!isOpen);

//     return (
//         <>
//             <button className="collapse-button" onClick={CollapseChanger}>
//                 <img src={isOpen ? OpenCollapse : CloseCollapse} alt="Bouton détails" />
//             </button>
//             {isOpen && children}
//         </>
//     )
// }

// export default Collapse