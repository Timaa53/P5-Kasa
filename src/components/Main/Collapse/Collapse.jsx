import { useEffect, useState } from 'react'
import CloseCollapse from '../../../assets/images/Collapses/closed_collapse.png'
import OpenCollapse from '../../../assets/images/Collapses/open_collapse.png'

function Collapse({logo, text}) {
    const [isOpen, setIsOpen] = useState(false)

    const CollapseChanger = () => {setIsOpen(!isOpen);}

    return(

    )
}

export default Collapse