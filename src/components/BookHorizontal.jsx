import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function BookHorizontal(bookSlug) {

    const [bookInfo, setBookInfo] = useState({});
    const navigate = useNavigate();

    async function getBook() {
        const response = await fetch(`http://127.0.0.1:5000/book?name=${bookSlug.bookSlug}`, {
            method: 'GET'
        })
        
        const data = await response.json();
        setBookInfo(data.dicc);
    }
    
    useEffect(() => {getBook();}, [])

    return (
        <div className="w-full bg-[var(--fondo)] flex gap-2">
            <div>
                <img src={`../../public/${bookInfo.slug}.jpg`}
                className="w-[15rem]"/>
            </div>
            <div className="w-full flex flex-col gap-3 justify-between">
                <div>
                    <h1 className="text-[1.2rem]">{bookInfo.name}</h1>
                    <p className="bg-[var(--letra)] text-[var(--fondo)] w-fit pl-2 pr-2 rounded-[10px]">{bookInfo.category}</p>
                </div>
                <div>
                    <p className="text-[var(--principal)]">{bookInfo.autor}</p>
                    <hr />
                    <p>{bookInfo.description}</p>
                </div>
                <div>
                    <p>Páginas: {bookInfo.pages}</p>
                    <p>Año: {bookInfo.year}</p>
                </div>
                <button 
                onClick={() => {navigate(`/reservar?name=${bookSlug.bookSlug}`)}}
                className="bg-[var(--principal)] pl-2 pr-2 p-1 text-white mr-2 mb-2">Reservar</button>
            </div>
        </div>        
    )
}