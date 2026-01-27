import { useEffect, useState } from "react";
import { useLocation } from "react-router"
import Header from "../components/Header";
import Calendar from "react-calendar";

export default function ReservarPage() {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const bookSlug = queryParams.get('name');

    const [dayToReserve, setDayToReserve] = useState();
    const [bookInfo, setBookInfo] = useState({});

    console.log(dayToReserve);

    function reservar() {
        
    }

    async function getBook() {
        const response = await fetch(`http://127.0.0.1:5000/book?name=${bookSlug}`, {
            method: 'GET'
        })
        
        const data = await response.json();
        setBookInfo(data.dicc);
    }
    useEffect(() => {getBook()}, []); // Inicializar la funcion getBook() solo cuando se renderize la pagina

    return (
        <div className="flex flex-col items-center ">
            <Header/>
            <div className="max-w-[1200px] w-full bg-[var(--fondo)] flex text-[var(--letra)] gap-2">
                <div>
                    <img src={`../../public/${bookInfo.slug}.jpg`}
                    className="w-[30rem]"/>
                </div>
                <div className="w-full flex flex-col gap-4">
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
                </div>
                <div className='w-[800px] flex flex-col gap-4'>
                    <Calendar
                    minDate={new Date()}
                    onChange={(value) => {setDayToReserve(value.getDate())}}
                    />
                    <button className="w-fit bg-[var(--principal)] text-white p-1 rounded-[10px]"
                    onClick={() => {reservar()}}
                    >RESERVAR</button>
                </div>
            </div>
        </div>
    )
}