import React, {useState} from 'react'
import Modal from './Modal';

function Card({book}) {
  const [show, setShow]=useState(false);
  const [bookItem, setItem]=useState();
  return (
    <>
      {
        // eslint-disable-next-line array-callback-return
        book.map((item) => {
          let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
          let pageCount = item.volumeInfo && item.volumeInfo.pageCount;
          if(thumbnail !== undefined && pageCount !== undefined) {
            return(
            <>
              <div className="card" onClick={()=>{setShow(true);setItem(item)}}>
                <img src={thumbnail} alt=""/>
                <div className="bottom">
                    <h3 className="title">{item.volumeInfo.title}</h3>
                    <p className="pageCount">{pageCount} páginas</p>
                </div>
              </div>
              <Modal show={show} item={bookItem} onClose={()=>setShow(false)}/>
            </>
          )
          }
          
        })
      }
    </>
  )
}

export default Card