

const Modal = ({show, item, onClose}) => {
    if(!show) {
        return null;
    }
    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    const avaliable = Boolean(Math.round(Math.random() < 0.5))
    let isAvaliable = "";
    if(avaliable) {
        isAvaliable = "Disponível";
    } else {
        isAvaliable = "Alugado"
    }
    return(
        <>
            <div className="overlay">
                <div className="overlay-inner">
                    <button className="close" onClick={onClose}><i class="fas fa-times"></i></button>
                    <div className="inner-box">
                        <img src={thumbnail} alt=""/>
                        <div className="info">
                            <h1>{item.volumeInfo.title}</h1>
                            <h3>{item.volumeInfo.authors}</h3><br/>
                            <h4>{item.volumeInfo.publisher} <span>{item.volumeInfo.publishedDate}</span></h4><br/>
                            <h4>{isAvaliable}</h4><br/>
                            <a href={item.volumeInfo.previewLink}><button>Mais</button></a>
                        </div>
                    </div>
                    <h4 className="description">{item.volumeInfo.description}</h4>
                </div>
            </div>
        </>
    )
}

export default Modal;