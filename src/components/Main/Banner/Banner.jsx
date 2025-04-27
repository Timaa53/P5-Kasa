function Banner({image, textBanner=true}) {
    return(
        <div className="banner">
        <img src={image} alt="Image Bannière Kasa" className="banner-img" />
        {textBanner && (<h1 className="banner-text">Chez vous, partout et ailleurs</h1>)}
        </div>
    )
}

export default Banner