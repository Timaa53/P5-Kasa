function Banner({image, textBanner}) {
    return(
        <div className="banner">
        <img src={image} alt="Image Bannière Kasa" className="banner-img" />
        <h1 className="banner-text">{textBanner}</h1>
        </div>
    )
}

export default Banner