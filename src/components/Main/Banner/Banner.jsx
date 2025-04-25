import Logo from '../../../assets/images/Banner.png'

function Banner() {
    return(
        <div className="banner">
        <img src={Logo} alt="Image Bannière Kasa" className="banner-logo" />
        <h1 className="banner-text">Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner