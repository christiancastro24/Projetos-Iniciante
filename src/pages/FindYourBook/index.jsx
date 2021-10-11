import axios from "axios"
import { useState } from "react"

export const FindYourBook = () => {

    const [bookTitle, setBookTitle] = useState("")
    const [books, setBooks] = useState([])

    const handleSearchBook = () => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookTitle}`)
        .then(res => setBooks([res.data.items[0].volumeInfo]))
        .catch(err => console.error(err))
    }
    return (
        <div>
            <h1>Encontre seu livro</h1>
            <input type="text" value={bookTitle} onChange={evt => setBookTitle(evt.target.value)} />
            <button onClick={handleSearchBook}>Procurar livro</button>

            {books.map(book => (
                <div>
                    <h2>Nome: {book.title}</h2> 
                    <h4>Nome: {book.description?.length > 100 ? book.description.slice(0, 100) + "..." : book.description }</h4> 
                    <img src={book.imageLinks?.smallThumbnail || book.imageLinks?.thumbnail} alt="book" style={{width: "200px"}} />
                </div>
            ))}
        </div>
    )
}