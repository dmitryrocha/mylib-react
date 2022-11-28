import React, {useState} from 'react'
import Card from './Card'
import axios from 'axios'

const Main = () => {

    const [search, setSearch] = useState("");
    const[bookData, setData] = useState([]);
    const searchBook = (evt) => {
        if(evt.key === "Enter") {
         axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+ '&key=AIzaSyDj7kcOaZvgXTQ-LU1YvAbg0tPuOdI8g1E'+'&maxResults=40')
            .then(res => setData(res.data.items))
            .catch(err => console.log(err))
        }
    }

    return (
        <>
            <div className="header">
                <div className="row1">
                    
                </div>
                <div className="row2">
                    <h2>Busque aqui o livro desejado</h2>
                    <div className="search">
                        <input 
                            type="text" 
                            placeholder="Busque pelo tírulo" 
                            value={search} 
                            onChange={e => setSearch(e.target.value)}
                            onKeyPress={searchBook}
                        />
                        <button onClick={searchBook}><i className="fas fa-search"></i></button>
                    </div>
                    <img src="./images/bg2.png" alt="" />
                </div>
            </div>
            <div className="container">
                {
                    <Card book={bookData} />
                }
            </div>
        </>
  )
}

export default Main